'use strict';

/** @interface */
const ITracker = require('../interfaces/i-tracker');

const probe = require('tcp-ping').probe;

/**
 * Abstract Tracker Adapter class
 * @implements {ITracker}
 * @extends {EventEmitter}
 */
class AbstractTrackerAdapter extends ITracker {
	constructor() {
		super();

		if (this.constructor === AbstractTrackerAdapter) {
			throw new TypeError("Can not construct abstract class.");
		}

		/**
		 * @type {string}
		 * @protected
		 */
		this._url = '';

		/**
		 * Object that is converted to another class
		 * @type {function(*)}
		 * @protected
		 */
		this._adaptee = null;

		/**
		 * @type {ISearchResponse}
		 * @protected
		 */
		this._searchResponse = null;
	}

	/**
	 * @inheritDoc
	 */
	search(optParams) {
		let params = /** @type {SearchParams} */ {};
		params.query = optParams.query || 'cbr';
		params.maxItems = optParams.maxItems || 10;
		params.order = optParams.order || '';
		params.desc = optParams.desc || false;

		return new Promise((resolve, reject) => {
			this.isAvailable()
				.then(() => {
					this._searchRequest(params.query)
						.then(responseData => {
							this._normalizeSearchResponse(responseData, params)
								.then(torrents => {
									resolve(torrents);
								})
								.catch(err => {
									reject(err);
								});
						})
						.catch(err => {
							reject(err);
						});
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	/**
	 * @inheritDoc
	 */
	getUrl() {
		return this._url;
	}

	/**
	 * @inheritDoc
	 */
	isAvailable() {
		return new Promise((resolve, reject) => {
			probe(this._getDomain(), 80, (err, avail) => {
				if (err) {
					reject(err);
				} else {
					if (avail) {
						resolve();
					} else {
						reject(new Error('Tracker is not available now'));
					}
				}
			})
		});
	}

	/**
	 * @protected
	 * @return {string}
	 */
	_getDomain() {
		const regExp = /(http|https):\/\//;
		return this._url.split(regExp)[2];
	}

	/**
	 * @param {*} responseData
	 * @param {SearchParams} params
	 * @return {Promise.<Array.<ITorrent>|error>}
	 * @abstract
	 * @protected
	 */
	_normalizeSearchResponse(responseData, params) {
		return new Promise((resolve, reject) => {
			this._searchResponse.uninit();
			this._searchResponse.init(responseData, params)
				.then(() => {
					resolve(this._searchResponse.getTorrents());
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	/**
	 * @param {string} queryString
	 * @return {Promise.<*|error>}
	 * @abstract
	 * @protected
	 */
	_searchRequest(queryString) {
		throw new TypeError('Abstracted method _searchRequest is not implemented');
	}
}


module.exports = AbstractTrackerAdapter;
