'use strict';

const AbstractTrackerAdapter = require('../../../classes/abstract-tracker-adapter');
const SearchResponse = require('./search-response');
const thePirateBay = require('tortuga');

/**
 * KickAssTorrent adapter
 */
class TrackerAdapter extends AbstractTrackerAdapter {
	constructor() {
		super();

		this._url = 'http://thepiratebay.cr';
		this._searchResponse = new SearchResponse();
		this._adaptee = thePirateBay;
	}

	/**
	 * @override
	 */
	_searchRequest(queryString) {
		return new Promise((resolve, reject) => {
			try {
				this._adaptee.search(queryString, results => {
					resolve(results);
				});
			} catch(err) {
				reject(err);
			}
		});
	}
}


module.exports = TrackerAdapter;
