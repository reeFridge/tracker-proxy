'use strict';

const EventEmitter = require('events');

/**
 * Common Torrent interface
 * @interface
 */
class ITorrent extends EventEmitter {
	constructor() {
		super();

		if (this.constructor === ITorrent) {
			throw new TypeError('Can not create new instance of interface');
		}
	}

	/**
	 * Get torrent title
	 * @return {string}
	 */
	get title() {
		throw new TypeError('Method "getTitle" is not implemented.');
	}

	/**
	 * Get torrent page url
	 * @return {string}
	 */
	get pageUrl() {
		throw new TypeError('Method "getPageUrl" is not implemented.');
	}

	/**
	 * Get torrent file url
	 * @return {string}
	 */
	get torrentUrl() {
		throw new TypeError('Method "getTorrentUrl" is not implemented.');
	}

	/**
	 * Get magnet uri
	 * @return {string}
	 */
	get magnet() {
		throw new TypeError('Method "getMagnet" is not implemented.');
	}

	/**
	 * Get torrent publication date
	 * @return {Date}
	 */
	get publicationDate() {
		throw new TypeError('Method "getPublicDate" is not implemented.');
	}

	/**
	 * Get array of files in the torrent
	 * @return {Array.<File>}
	 */
	get files() {
		throw new TypeError('Method "getFiles" is not implemented.');
	}

	/**
	 * Get peers count
	 * @return {number}
	 */
	get peers() {
		throw new TypeError('Method "getPeers" is not implemented.');
	}

	/**
	 * Get leechs count
	 * @return {number}
	 */
	get leechs() {
		throw new TypeError('Method "getLeechs" is not implemented.');
	}

	/**
	 * Get seeds count
	 * @return {number}
	 */
	get seeds() {
		throw new TypeError('Method "getSeeds" is not implemented.');
	}

	/**
	 * Get torrent hash
	 * @return {string}
	 */
	get hash() {
		throw new TypeError('Method "getHash" is not implemented.');
	}

	/**
	 * Get size of all files included in torrent (in bytes)
	 * @return {number}
	 */
	get size() {
		throw new TypeError('Method "getSize" is not implemented.');
	}
}


/**
 * @typedef {{
 *     name: string,
 *     size: number,
 *     dir: boolean,
 *     path: string
 * }} File
 */


module.exports = ITorrent;
