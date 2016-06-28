


/**
 * Common Torrent interface
 * @interface
 */
class ITorrent {
	/**
	 * Get torrent title
	 * @return {string}
	 */
	getTitle() {}

	/**
	 * Get torrent page url
	 * @return {string}
	 */
	getPageUrl() {}

	/**
	 * Get torrent file url
	 * @return {string}
	 */
	getTorrentUrl() {}

	/**
	 * Get magnet uri
	 * @return {string}
	 */
	getMagnet() {}

	/**
	 * Get torrent publication date
	 * @return {Date}
	 */
	getPublicationDate() {}

	/**
	 * Get files count in the torrent
	 * @return {number}
	 */
	getFilesCount() {}

	/**
	 * Get array of files in the torrent
	 * @return {Array.<File>}
	 */
	getFiles() {}

	/**
	 * Get peers count
	 * @return {number}
	 */
	getPeers() {}

	/**
	 * Get leeches count
	 * @return {number}
	 */
	getLeechs() {}

	/**
	 * Get seeds count
	 * @return {number}
	 */
	getSeeds() {}

	/**
	 * Get torrent hash
	 * @return {string}
	 */
	getHash() {}

	/**
	 * Get size of all files included in torrent (in bytes)
	 * @return {number}
	 */
	getSize() {}
}


/**
 * @typedef {{
 *     name: string,
 *     size: number,
 *     dir: boolean,
 *     path: string
 * }} File
 */
