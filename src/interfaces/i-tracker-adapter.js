'use strict';

const EventEmitter = require('events');

/**
 * Common torrent-tracker-adapter interface.
 * @interface
 */
class ITrackerAdapter extends EventEmitter {
	constructor() {
		super();

		if (this.constructor === ITrackerAdapter) {
			throw new TypeError('Can not create new instance of interface');
		}
	}

	/**
	 * Search query.
	 * @param {QueryParams} optParams
	 * @return {Promise.<IQueryResponse|error>}
	 */
	doQuery(optParams) {
		throw new TypeError('Method "doQuery" is not implemented.');
	}

	/**
	 * Tracker availability check.
	 * @return {Promise.<undefined|error>}
	 */
	isAvailable() {
		throw new TypeError('Method "isAvailable" is not implemented.');
	}

	/**
	 * Getter for private tracker url variable.
	 * @return {string}
	 */
	getUrl() {
		throw new TypeError('Method "getUrl" is not implemented.');
	}
}


/**
 * @typedef {{
 *     query: string,
 *     category: string,
 *     maxItems: number,
 *     order: string,
 *     desc: boolean
 * }} QueryParams
 */


module.exports = ITrackerAdapter;
