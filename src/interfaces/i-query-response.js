/**
 * Common QueryResponse interface
 * @interface
 */
class IQueryResponse {
  /**
   * Sort items by field
   * @param {string} field
   * @return {void}
   */
  sortByField() {}

  /**
   * Do search query between items from this response
   * @param {QueryParams} [optParams]
   * @return {IQueryResponse}
   */
  doQuery() {}

  /**
   * Get array of torrent items in response
   * @param {number} [optCount] items
   * @return {Array<ITorrent>}
   */
  get items(optCount) {}

  /**
   * Get count of items in response
   * @return {number}
   */
  get itemsCount() {}
}
