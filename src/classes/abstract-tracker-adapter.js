'use strict';

/** @interface */
const ITrackerAdapter = require('../interfaces/i-tracker-adapter');

const probe = require('tcp-ping').probe;

/**
 * Abstract Tracker Adapter class
 * @implements {ITrackerAdapter}
 * @extends {EventEmitter}
 */
class AbstractTrackerAdapter extends ITrackerAdapter {
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
	}

	/**
	 * @inheritDoc
	 */
	doQuery(optParams) {
		let params = /** @type {QueryParams} */ {};
		params.query = optParams.query || '.cbr';
		params.category = optParams.category || '';
		params.maxItems = optParams.maxItems || 10;
		params.order = optParams.order || '';
		params.desc = optParams.category || false;

		return new Promise((resolve, reject) => {
			this._searchQueryRequest(params)
				.then(responseData => {
					this._createQueryResponse(responseData)
						.then(queryResponse => {
							resolve(queryResponse);
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
						reject();
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
	 * @param {QueryParams} params
	 * @return {Promise.<IQueryResponse|error>}
	 * @abstract
	 * @protected
	 */
	_searchQueryRequest(params) {
		throw new TypeError('Abstracted method _searchQueryRequest is not implemented');
	}

	/**
	 * @param {*} responseData
	 * @return {Promise.<IQueryResponse|error>}
	 * @abstract
	 * @protected
	 */
	_createQueryResponse(responseData) {
		throw new TypeError('Abstract method _createQueryResponse is not implemented');
	}
}


module.exports = AbstractTrackerAdapter;
