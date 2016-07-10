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
		 * @type {Object.<string, ITracker>}
		 * @protected
		 */
		this._trackers = {};

		/**
		 * Fired with: included tracker UID
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
			const uid = this.constructor._generateUID();
			this._trackers[uid] = trackerAdapter;
			this.emit(this.EVENT_TRACKER_INCLUDED, trackerAdapter);
			return uid;
		} else {
			this.emit(this.EVENT_ERROR, new Error('Including error: All tracker adapter must be instances of ITracker'));
		}
		return undefined;
	}

	/**
	 * @inheritDoc
	 */
	exclude(uid) {
		if (this._trackers[uid] !== undefined) {
			const removingItem = this._trackers[uid];
			this.emit(this.EVENT_TRACKER_EXCLUDED, removingItem);
			delete this._trackers[uid];
			return true;
		} else {
			this.emit(this.EVENT_ERROR, new Error(`Excluding error: Array not containing item with index = ${uid}`));
		}
		return false;
	}

	/**
	 * @inheritDoc
	 */
	search(searchParams) {
		const uids = Object.keys(this._trackers);
		if (uids.length !== 0) {
			uids.forEach(uid => {
				const tracker = this._trackers[uid];
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

	/**
	 * @return {string}
	 * @protected
	 */
	static _generateUID() {
		return '_' + Math.random().toString(36).substr(2, 9);
	}
}


module.exports = TrackerManager;
