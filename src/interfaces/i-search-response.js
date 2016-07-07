'use strict';

const EventEmitter = require('events');

/**
 * Common SearchResponse interface
 * @interface
 */
class ISearchResponse extends EventEmitter {
	constructor() {
		super();

		if (this.constructor === ISearchResponse) {
			throw new TypeError('Can not create new instance of interface');
		}
	}

	/**
	 * @param {*} responseData
	 * @param {SearchParams} searchParams
	 * @return {Promise.<undefined|error>}
	 */
	init(responseData, searchParams) {
		throw new TypeError('Method "init" is not implemented.');
	}

	uninit() {
		throw new TypeError('Method "uninit" is not implemented.');
	}

	/**
	 * Get array of torrent items in response
	 * @return {Array.<ITorrent>}
	 */
	getTorrents() {
		throw new TypeError('Method "getItems" is not implemented.');
	}
}


module.exports = ISearchResponse;