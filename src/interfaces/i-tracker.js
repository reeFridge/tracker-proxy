/**
 * Common torrent-tracker interface.
 * @interface
 */
class ITracker {
  /**
   * Search query.
   * @param {QueryParams=} optParams
   * @return {Promise.<IQueryResponse|error>}
   */
  getQuery(optParams) {}

  /**
   * Tracker availability check.
   * @return {Promise.<undefined|error>}
   */
  isAvailable() {}

  /**
   * Get tracker url.
   * @return {string}
   */
  getUrl() {}
}

/**
 * @typedef {Object} QueryParams
 * @property {string} query Search query
 * @property {string} category Search category
 * @property {number} maxItems Max items in the response
 * @property {string} order Sort order
 * @property {boolean} desc Descending order if true
 */