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
	'use strict';
	return class AbstractTracker extends EventEmitter {
		constructor() {
			super();

			/**
			 * @type {string}
			 * @protected
			 */
			this._url = '';
		}

		/**
		 * @inheritDoc
		 */
		doQuery(optParams) {
			let params = /** @type {QueryParams} */ {};
			params.query = optParams.query || 'comics';
			params.category = optParams.category || '';
			params.maxItems = optParams.maxItems || 10;
			params.order = optParams.order || '';
			params.desc = optParams.category || false;

			return new Promise((resolve, reject) => {
				this._searchQueryRequest(params)
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
				probe(this._getDomain(), 80, (err, avail) => {
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
		 * @return {Promise.<IQueryResponse|error>}
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
		 * @protected
		 * @return {string}
		 */
		_getDomain() {
			const regExp = /(http|https):\/\//;
			return this._url.split(regExp)[2];
		}

		/**
		 * @param {QueryParams} params
		 * @abstract
		 * @protected
		 */
		_createQueryUrl(params) {
			throw new Error('Protected method _createQueryUrl is not implemented');
		}

		/**
		 * @param {string} responseData
		 * @return {Promise.<IQueryResponse|error>
		 * @abstract
		 * @protected
		 */
		_createQueryResponse(responseData) {
			throw new Error('Protected method _createQueryResponse is not implemented');
		};
	}
})();

