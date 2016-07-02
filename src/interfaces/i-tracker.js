'use strict';

const EventEmitter = require('events');

/**
 * Common torrent-tracker interface.
 * @interface
 */
class ITracker extends EventEmitter {
	constructor() {
		super();
	}

	/**
	 * Search query.
	 * @param {QueryParams} optParams
	 * @return {Promise.<IQueryResponse|error>}
	 */
	doQuery(optParams) {
		throw Error('Method "doQuery" is not implemented.');
	}

	/**
	 * Tracker availability check.
	 * @return {Promise.<undefined|error>}
	 */
	isAvailable() {
		throw Error('Method "isAvailable" is not implemented.');
	}

	/**
	 * Getter for private tracker url variable.
	 * @return {string}
	 */
	getUrl() {
		throw Error('Method "getUrl" is not implemented.');
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


module.exports = ITracker;
