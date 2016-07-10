'use strict';

const EventEmitter = require('events');

/**
 * Tracker Manager
 * @interface
 */
class ITrackerManager extends EventEmitter {
	constructor() {
		super();

		if (this.constructor === ITrackerManager) {
			throw new TypeError('Can not create new instance of interface');
		}
	}

	/**
	 * Include tracker in search
	 * @param {ITracker} tracker
	 * @return {string|undefined} UID of tracker in list
	 */
	include(tracker) {
		throw new TypeError('Method "include" is not implemented.');
	}

	/**
	 * Exclude tracker from search
	 * @param {string} uid
	 * @return {boolean} status of excluding
	 */
	exclude(uid) {
		throw new TypeError('Method "exclude" is not implemented.');
	}

	/**
	 * Search in all included trackers
	 * @param {SearchParams} searchParams
	 */
	search(searchParams) {
		throw new TypeError('Method "search" is not implemented.');
	}
}


module.exports = ITrackerManager;
