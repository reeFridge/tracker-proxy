


/**
 * Common torrent-tracker interface.
 * @interface
 */
class ITracker {
  /**
   * Search query.
   * @param {QueryParams} [optParams]
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
  getUrl() {}
}


/**
 * @typedef {{
 *     query: string,
 *     category: string,
 *     maxItems: number,
 *     order: string,
 *     desc: boolean
 * }} QueryParams
 */
