


/**
 * @interface
 */
IQueryResponse = function() {};


/**
 * @return {void}
 */
IQueryResponse.prototype.sortByField = function() {};


/**
 * @return {ITorrent}
 */
IQueryResponse.prototype.getItem = function() {};


/**
 * @return {number}
 */
IQueryResponse.prototype.getItemsCount = function() {};


/**
 * @return {IQueryResponse}
 */
IQueryResponse.prototype.getItemsQuery = function() {};

