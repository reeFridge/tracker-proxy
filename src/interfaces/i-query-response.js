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
  sortByField(field) {}

  /**
   * Do search query between items from this response
   * @param {QueryParams} [optParams]
   * @return {IQueryResponse}
   */
  doQuery(optParams) {}

  /**
   * Get array of torrent items in response
   * @return {Array<ITorrent>}
   */
  getItems() {}

  /**
   * Get count of items in response
   * @return {number}
   */
  getItemsCount() {}
}
