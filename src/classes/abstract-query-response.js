'use strict';

/** @interface */
const IQueryResponse = require('../interfaces/i-query-response');

/**
 * Abstract QueryResponse class
 * @param {*} responseData
 * @implements {IQueryResponse}
 * @extends {EventEmitter}
 */
class AbstractQueryResponse extends IQueryResponse {
	constructor(responseData) {
		super();

		/**
		 * @type {Array.<ITorrent>}
		 * @protected
		 */
		this._torrents = [];

		this._parseResponseData(responseData)
			.then(torrents => {
				this._torrents = torrents;
				this.emit('init:complete', torrents);
			})
			.catch(err => {
				this.emit('init:error', err);
			});
	}

	/**
	 * @inheritDoc
	 */
	sortByField(field) {
		field = 'get' + field[0].toUpperCase() + field.substr(1);
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
						let torrentField = 'get' + field[0].toUpperCase() + field.substr(1);
						return queryParams[field] === torrent[torrentField]();						return true;
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
	getItems() {
		return this._torrents;
	}

	/**
	 * This abstract method should overrides in all adapters
	 * @param {*} data
	 * @return {Promise.<error|Array.<ITorrent>>} torrents
	 * @abstract
	 * @protected
	 */
	_parseResponseData(data) {
		throw Error('Protected method _parseResponseData is not implemented');
	}
}


module.exports = AbstractQueryResponse;
