'use strict';

const EventEmitter = require('events');

/**
 * Common QueryResponse interface
 * @interface
 */
class IQueryResponse extends EventEmitter {
	constructor() {
		super();

		if (this.constructor === IQueryResponse) {
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
	 * @return {Promise.<IQueryResponse|error>}
	 */
	filter(optParams) {
		throw new TypeError('Method "doQuery" is not implemented.');
	}

	/**
	 * Get array of torrent items in response
	 * @return {Array.<ITorrent>}
	 */
	getItems() {
		throw new TypeError('Method "getItems" is not implemented.');
	}
}


module.exports = IQueryResponse;