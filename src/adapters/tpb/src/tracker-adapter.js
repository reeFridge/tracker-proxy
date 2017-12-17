'use strict';

const AbstractTrackerAdapter = require('../../../classes/abstract-tracker-adapter');
const SearchResponse = require('./search-response');
const thePirateBay = require('thepiratebay');

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
				this._adaptee
					.search(queryString, {
						category: 'video',
						orderBy: 'seeds',
                        sortBy: 'desc'
					})
					.then(resolve);
			} catch(err) {
				reject(err);
			}
		});
	}
}


module.exports = TrackerAdapter;
