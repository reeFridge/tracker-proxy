'use strict';

const AbstractTrackerAdapter = require('../../../classes/abstract-tracker-adapter');
const QueryResponse = require('./query-response');
const kickAssTorrent = require('kat-cr');

/**
 * KickAssTorrent adapter
 */
class TrackerAdapter extends AbstractTrackerAdapter {
	constructor() {
		super();

		this._url = 'http://kat.cr';
		this._adaptee = kickAssTorrent;
	}

	/**
	 * @override
	 */
	_searchQueryRequest(params) {
		return new Promise((resolve, reject) => {
			this._adaptee({
				search: params.query,
				page: 1
			}).then(results => {
				resolve(results);
			}).catch(err => {
				reject(err);
			});
		});

	}

	/**
	 * @override
	 */
	_createQueryResponse(responseData) {
		return new Promise((resolve, reject) => {
			let queryResponse = new QueryResponse(responseData);
			queryResponse.on('init:complete', response => {
				resolve(response);
			});
			queryResponse.on('init:error', err => {
				reject(err);
			});
		});
	}
}


module.exports = TrackerAdapter;
