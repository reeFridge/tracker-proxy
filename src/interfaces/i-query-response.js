'use strict';

const EventEmitter = require('events');

/**
 * Common QueryResponse interface
 * @interface
 */
class IQueryResponse extends EventEmitter {
	constructor() {
		super();
	}

	/**
	 * Sort items by field
	 * @param {string} field
	 * @return {Promise.<error|undefined>}
	 */
	sortByField(field) {
		throw Error('Method "sortByField" is not implemented.');
	}

	/**
	 * Do search query between items from this response
	 * @param {QueryParams=} optParams
	 * @return {Promise.<IQueryResponse|error>}
	 */
	filter(optParams) {
		throw Error('Method "doQuery" is not implemented.');
	}

	/**
	 * Get array of torrent items in response
	 * @return {Array.<ITorrent>}
	 */
	getItems() {
		throw Error('Method "getItems" is not implemented.');
	}
}


module.exports = IQueryResponse;