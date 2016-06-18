/**
 * Common Torrent interface
 * @interface
 */
class ITorrent {
  /**
   * Get torrent title
   * @return {string}
   */
  get title() {}

  /**
   * Get torrent page url
   * @return {string}
   */
  get pageUrl() {}

  /**
   * Get torrent file url
   * @return {string}
   */
  get torrentUrl() {}

  /**
   * Get magnet uri
   * @return {string}
   */
  get magnet() {}

  /**
   * Get torrent publication date
   * @return {Date}
   */
  get publicationDate() {}

  /**
   * Get files count in the torrent
   * @return {number}
   */
  get filesCount() {}

  /**
   * Get array of files in the torrent
   * @return {Array.<File>}
   */
  get files() {}

  /**
   * Get peers count
   * @return {number}
   */
  get peers() {}

  /**
   * Get leeches count
   * @return {number}
   */
  get leechs() {}

  /**
   * Get seeds count
   * @return {number}
   */
  get seeds() {}

  /**
   * Get torrent hash
   * @return {string}
   */
  get hash() {}

  /**
   * Get size of all files included in torrent (in bytes)
   * @return {number}
   */
  get size() {}
}

/**
 * @typedef {Object} File
 * @property {string} name File name
 * @property {size} number Size in bytes
 * @property {boolean} dir True if file is dir
 * @property {string} path File path in torrent
 */
