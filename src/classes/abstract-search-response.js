'use strict';

/** @interface */
const ISearchResponse = require('../interfaces/i-search-response');

/**
 * Abstract SearchResponse class
 * @param {*} responseData
 * @implements {ISearchResponse}
 * @extends {EventEmitter}
 */
class AbstractSearchResponse extends ISearchResponse {
	constructor(responseData) {
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
		 * Fired without args
		 * @type {string}
		 */
		this.EVENT_INIT_START = 'init:start';

		/**
		 * Fired without args
		 * @type {string}
		 */
		this.EVENT_INIT_COMPLETE = 'init:complete';

		/**
		 * Fired with: initialization error
		 * @type {string}
		 */
		this.EVENT_INIT_ERROR = 'init:error';

		this.emit(this.EVENT_INIT_START);
		this._parseResponseData(responseData)
			.then(torrents => {
				this._torrents = torrents;
				this.emit(this.EVENT_INIT_COMPLETE);
			})
			.catch(err => {
				this.emit(this.EVENT_INIT_ERROR, err);
			});
	}

	/**
	 * @inheritDoc
	 */
	sortByField(field) {
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
	 * @inheritDoc
	 */
	filter(queryParams) {
		return new Promise((resolve, reject) => {
			try {
				var torrents = this._torrents.filter(torrent => {
					let fields = Object.keys(queryParams);
					return fields.every((field) => {
						return queryParams[field] === torrent[field];
					});
				});
			} catch(err) {
				reject(err);
			}
			resolve(torrents);
		});
	}

	/**
	 * @inheritDoc
	 */
	getTorrents() {
		return this._torrents;
	}

	/**
	 * @param {*} data
	 * @return {Promise.<error|Array.<ITorrent>>} torrents
	 * @abstract
	 * @protected
	 */
	_parseResponseData(data) {
		throw new TypeError('Abstract method "_parseResponseData" is not implemented');
	}
}


module.exports = AbstractSearchResponse;
