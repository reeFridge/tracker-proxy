'use strict';

/** @interface */
const ISearchResponse = require('../interfaces/i-search-response');

/**
 * Abstract SearchResponse class
 * @implements {ISearchResponse}
 * @extends {EventEmitter}
 */
class AbstractSearchResponse extends ISearchResponse {
	constructor() {
		if (this.constructor === AbstractSearchResponse) {
			throw new TypeError("Can not construct abstract class.");
		}

		super();

		/**
		 * @type {Array.<ITorrent>}
		 * @protected
		 */
		this._torrents = [];

		/**
		 * @type {*}
		 * @protected
		 */
		this._responseData = null;

		/**
		 * @type {SearchParams}
		 * @protected
		 */
		this._searchParams = null;
	}

	init(responseData, params) {
		this._responseData = responseData;
		this._searchParams = params;
		return new Promise((resolve, reject) => {
			this._parseResponseData(this._responseData)
				.then(torrents => {
					// TODO: Filtering by searchParams
					this._torrents = torrents;
					resolve();
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	uninit() {
		this._responseData = null;
		this._torrents = [];
		this._searchParams = null;
	}

	/**
	 * @inheritDoc
	 */
	getTorrents() {
		return this._torrents;
	}

	/**
	 * Sort items by field
	 * @param {string} field
	 * @return {Promise.<error|undefined>}
	 */
	_sortByField(field) {
		return new Promise((resolve, reject) => {
			try {
				this._torrents.sort((torrentA, torrentB) => {
					let fieldA = torrentA[field];
					let fieldB = torrentB[field];
					if (fieldA > fieldB) {
						return 1;
					} else if (fieldA < fieldB) {
						return -1
					} else {
						return 0;
					}
				});
			} catch(err) {
				reject(err);
			}
			resolve();
		});
	}

	/**
	 * Do search query between items from this response
	 * @return {Promise.<Array.<ITorrent>|error>}
	 */
	_filter() {
		return new Promise((resolve, reject) => {
			try {
				var torrents = this._torrents.filter(torrent => {
					let fields = Object.keys(this._searchParams);
					return fields.every((field) => {
						return this._searchParams[field] === torrent[field];
					});
				});
			} catch(err) {
				reject(err);
			}
			resolve(torrents);
		});
	}

	/**
	 * @param {*} data
	 * @return {Promise.<Array.<ITorrent>|error>} torrents
	 * @abstract
	 */
	_parseResponseData(data) {
		throw new TypeError('Abstract method "_parseResponseData" is not implemented');
	}
}


module.exports = AbstractSearchResponse;
