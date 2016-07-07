'use strict';

const AbstractTrackerAdapter = require('../../../classes/abstract-tracker-adapter');
const SearchResponse = require('./query-response');
const kickAssTorrent = require('kat-cr');

/**
 * KickAssTorrent adapter
 */
class TrackerAdapter extends AbstractTrackerAdapter {
	constructor() {
		super();

		this._url = 'http://kat.cr';
		this._searchResponse = new SearchResponse();
		this._adaptee = kickAssTorrent;
	}

	/**
	 * @override
	 */
	_searchRequest(queryString) {
		return new Promise((resolve, reject) => {
			this._adaptee({
				search: queryString,
				page: 1
			}).then(results => {
				resolve(results);
			}).catch(err => {
				reject(err);
			});
		});

	}
}


module.exports = TrackerAdapter;
