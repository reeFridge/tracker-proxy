


/**
 * Common torrent-tracker interface.
 * @interface
 */
ITracker = function() {};


/**
 * Search query.
 * @param {QueryParams=} opt_params
 * @return {Promise.<IQueryResponse|error>}
 */
ITracker.prototype.getQuery = function(opt_params) {};


/**
 * Tracker availability check.
 * @return {Promise.<undefined|error>}
 */
ITracker.prototype.isAvailable = function() {};


/**
 * Get tracker url.
 * @return {string}
 */
ITracker.prototype.getUrl = function() {};


/**
 * @typedef {{
 *     query: string,
 *     category: string,
 *     maxItems: number,
 *     order: string,
 *     desc: boolean
 * }} QueryParams
 */
