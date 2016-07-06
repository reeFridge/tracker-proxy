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
	 * Sort items by field
	 * @param {string} field
	 * @return {Promise.<error|undefined>}
	 */
	sortByField(field) {
		throw new TypeError('Method "sortByField" is not implemented.');
	}

	/**
	 * Do search query between items from this response
	 * @param {QueryParams=} optParams
	 * @return {Promise.<ISearchResponse|error>}
	 */
	filter(optParams) {
		throw new TypeError('Method "filter" is not implemented.');
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