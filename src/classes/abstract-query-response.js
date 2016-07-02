'use strict';

/** @interface */
const IQueryResponse = require('../interfaces/i-query-response');

/**
 * Abstract QueryResponse class
 * @implements {IQueryResponse}
 * @extends {EventEmitter}
 */
class AbstractQueryResponse extends IQueryResponse {
	constructor() {
		super();

		/**
		 * @type {Array.<ITorrent>}
		 * @protected
		 */
		this._torrents = [];
	}

	/**
	 * @inheritDoc
	 */
	sortByField(field) {
		return new Promise((resolve, reject) => {
			try {
				this._torrents.sort((torrentA, torrentB) => {
					if (torrentA['_' + field] > torrentB['_' + field]) {
						return 1;
					} else if (torrentA['_' + field] < torrentB['_' + field]) {
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
					let pass = true;
					Object.keys(queryParams).forEach(field => {
						let torrentField = 'get' + field[0].toUpperCase() + field.substr(1);
						if (queryParams[field] !== torrent[torrentField]()) {
							pass = false;
						}
					});
					return pass;
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
}

module.exports = AbstractQueryResponse;
