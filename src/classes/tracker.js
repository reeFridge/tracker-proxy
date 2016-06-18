var util = require('util');
var EventEmitter = require('events');
var probe = require('tcp-ping').probe;
var Promise = require('promise');
var request = require('request');



/**
 * Abstract Tracker class realization
 * @constructor
 * @extends {EventEmitter}
 * @implements {ITracker}
 */
var Tracker = function() {
	EventEmitter.call(this);
};
util.inherits(Tracker, EventEmitter);


/**
 * @inheritDoc
 */
Tracker.prototype.getQuery = function(opt_params) {
	var params = /** @type {QueryParams} */ {};
	params.query = opt_params.query || 'test';
	params.category = opt_params.category || '';
	params.maxItems = opt_params.maxItems || 10;
	params.order = opt_params.order || '';
	params.desc = opt_params.desc || false;

	return new Promise(function(resolve, reject) {
		this._searchQueryRequest(params, function(err, queryResponse) {
			if (err) {
				reject(err);
			} else {
				resolve(queryResponse);
			}
		});
	}.bind(this));
};


/**
 * @inheritDoc
 */
Tracker.prototype.getUrl = function() {
	return this._url;
};


/**
 * @inheritDoc
 */
Tracker.prototype.isAvailable = function() {
	return new Promise(function(resolve, reject) {
		probe(this._url, 80, function(err, avail) {
			if (err) {
				reject(err);
			} else {
				if (avail) {
					resolve();
				} else {
					reject();
				}
			}
		});
	}.bind(this));
};


/**
 * @param {QueryParams} params
 * @param {function(?Error, QueryResponse=)} callback
 * @protected
 */
Tracker.prototype._searchQueryRequest = function(params, callback) {
	var queryUrl = this._createQueryUrl(params);
	request(queryUrl, function(err, response, body) {
		if (err) {
			callback(err);
		} else {
			this._createQueryResponse(body)
				.then(function(queryResponse) {
					callback(null, queryResponse);
				})
				.reject(function(err) {
					callback(err);
				});
		}
	}.bind(this));
};


/**
 * @param {QueryParams} params
 * @protected
 */
Tracker.prototype._createQueryUrl = function(params) {
	throw new Error('Method is not implemented');
};


/**
 * @param {string} responseData
 * @return {Promise.<error|QueryResponse>}
 * @protected
 */
Tracker.prototype._createQueryResponse = function(responseData) {
	throw new Error('Method is not implemented');
};


/**
 * Tracker web-site url
 * @type {string}
 * @protected
 */
Tracker.prototype._url = '';


/**
 * @type {Tracker}
 */
module.exports = Tracker;
