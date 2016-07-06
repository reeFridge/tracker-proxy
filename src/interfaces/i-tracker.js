'use strict';

const EventEmitter = require('events');

/**
 * Common torrent-tracker interface.
 * @interface
 */
class ITracker extends EventEmitter {
	constructor() {
		super();

		if (this.constructor === ITracker) {
			throw new TypeError('Can not create new instance of interface');
		}
	}

	/**
	 * Search query.
	 * @param {QueryParams} optParams
	 * @return {Promise.<ISearchResponse|error>}
	 */
	search(optParams) {
		throw new TypeError('Method "search" is not implemented.');
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
 *     maxItems: number,
 *     order: string,
 *     desc: boolean
 * }} QueryParams
 */


module.exports = ITracker;
