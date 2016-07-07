'use strict';

/** @interface */
const ITrackerManager = require('../interfaces/i-tracker-manager');
/** @interface */
const ITracker = require('../interfaces/i-tracker');

/**
 * Tracker manager class
 * @implements {ITrackerManager}
 * @extends {EventEmitter}
 */
class TrackerManager extends ITrackerManager {
	constructor() {
		super();

		/**
		 * @type {Array.<ITracker>}
		 * @protected
		 */
		this._trackers = [];

		/**
		 * Fired with: included tracker index
		 * @type {string}
		 */
		this.EVENT_TRACKER_INCLUDED = 'include:complete';

		/**
		 * Fired with: excluded tracker instance
		 * @type {string}
		 */
		this.EVENT_TRACKER_EXCLUDED = 'exclude:complete';

		/**
		 * Fired with: error explain
		 * @type {string}
		 */
		this.EVENT_ERROR = 'error';

		/**
		 * Fired with: tracker, searchResponse
		 * @type {string}
		 */
		this.EVENT_SEARCH_RESPONSE = 'search:response';

		/**
		 * Fired with: tracker, error
		 * @type {string}
		 */
		this.EVENT_SEARCH_ERROR = 'search:error';
	}

	/**
	 * @inheritDoc
	 */
	include(trackerAdapter) {
		if (trackerAdapter instanceof ITracker) {
			let index = this._trackers.push(trackerAdapter) - 1;
			this.emit(this.EVENT_TRACKER_INCLUDED, trackerAdapter);
			return index;
		} else {
			this.emit(this.EVENT_ERROR, new Error('Including error: All tracker adapter must be instances of ITracker'));
		}
		return undefined;
	}

	/**
	 * @inheritDoc
	 */
	exclude(index) {
		if (this._trackers[index] !== undefined) {
			this.emit(this.EVENT_TRACKER_EXCLUDED, this._trackers[index]);
			return this._trackers.splice(index, 1)[0];
		} else {
			this.emit(this.EVENT_ERROR, new Error(`Excluding error: Array not containing item with index = ${index}`));
		}
		return undefined;
	}

	/**

	/**
	 * @inheritDoc
	 */
	search(searchParams) {
		if (this._trackers.length !== 0) {
			this._trackers.forEach(tracker => {
				tracker.search(searchParams)
					.then(searchResponse => {
						this.emit(this.EVENT_SEARCH_RESPONSE, tracker, searchResponse);
					})
					.catch(err => {
						this.emit(this.EVENT_SEARCH_ERROR, tracker, err);
					});
			});
		} else {
			this.emit(this.EVENT_ERROR, new Error('Search error: no one tracker is included'));
		}
	}
}


module.exports = TrackerManager;
