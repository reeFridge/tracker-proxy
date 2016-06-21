const util = require('util');
const EventEmitter = require('events');
const probe = require('tcp-ping').probe;
const request = require('request');


/**
 * Abstract Tracker class
 * @extends {EventEmitter}
 * @implements {ITracker}
 */
module.exports = (() => {
	return class AbstractTracker extends EventEmitter {
		constructor() {
			super();
		}

		/**
		 * @inheritDoc
		 */
		doQuery(optParams = {query: 'comics', category: '', maxItems: 10, order: '', desc: false}) {
			return new Promise((resolve, reject) => {
				this._searchQueryRequest(optParams)
					.then(queryResponse => {
						resolve(queryResponse);
					})
					.catch(err => {
						reject(err);
					});
			});
		}

		/**
		 * @inheritDoc
		 */
		getUrl() {
			return this._url;
		}

		/**
		 * @inheritDoc
		 */
		isAvailable() {
			return new Promise((resolve, reject) => {
				probe(this._url, 80, (err, avail) => {
					if (err) {
						reject(err);
					} else {
						if(avail) {
							resolve();
						} else {
							reject();
						}
					}
				})
			});
		}

		/**
		 * @param {QueryParams} params
		 * @return {Promise<IQueryResponse|error>}
		 * @protected
		 */
		_searchQueryRequest(params) {
			let queryUrl = this._createQueryUrl(params);
			request(queryUrl, (err, response, body) => {
				if (err) {
					return new Promise.reject(err);
				} else {
					this._createQueryResponse(body)
						.then(queryResponse => {
							return new Promise.resolve(queryResponse);
						})
						.reject(err => {
							return new Promise.reject(err);
						})
				}
			});
		}

		/**
		 * @param {QueryParams} params
		 * @abstract
		 * @protected
		 */
		_createQueryUrl(params) {
			throw new Error('Method is not implemented');
		}

		/**
		 * @param {string} responseData
		 * @return {Promise<IQueryResponse|error>
		 * @abstract
		 * @protected
		 */
		_createQueryResponse(responseData) {
			throw new Error('Method is not implemented');
		};
	}
})();

