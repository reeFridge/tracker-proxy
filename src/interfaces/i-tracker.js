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
  doQuery(optParams) {}

  /**
   * Tracker availability check.
   * @return {Promise.<undefined|error>}
   */
  isAvailable() {}

  /**
   * Getter for private tracker url variable.
   * @return {string}
   */
  get url() {}
}

/**
 * @typedef {Object} QueryParams
 * @property {string} query Search query
 * @property {string} category Search category
 * @property {number} maxItems Max items in the response
 * @property {string} order Sort order
 * @property {boolean} desc Descending order if true
 */
