'use strict';

const EventEmitter = require('events');

/**
 * Common Torrent interface
 * @interface
 */
class ITorrent extends EventEmitter {
	constructor() {
		super();
	}

	/**
	 * Get torrent title
	 * @return {string}
	 */
	get title() {
		throw Error('Method "getTitle" is not implemented.');
	}

	/**
	 * Get torrent page url
	 * @return {string}
	 */
	get pageUrl() {
		throw Error('Method "getPageUrl" is not implemented.');
	}

	/**
	 * Get torrent file url
	 * @return {string}
	 */
	get torrentUrl() {
		throw Error('Method "getTorrentUrl" is not implemented.');
	}

	/**
	 * Get magnet uri
	 * @return {string}
	 */
	get magnet() {
		throw Error('Method "getMagnet" is not implemented.');
	}

	/**
	 * Get torrent publication date
	 * @return {Date}
	 */
	get publicationDate() {
		throw Error('Method "getPublicDate" is not implemented.');
	}

	/**
	 * Get array of files in the torrent
	 * @return {Array.<File>}
	 */
	get files() {
		throw Error('Method "getFiles" is not implemented.');
	}

	/**
	 * Get peers count
	 * @return {number}
	 */
	get peers() {
		throw Error('Method "getPeers" is not implemented.');
	}

	/**
	 * Get leechs count
	 * @return {number}
	 */
	get leechs() {
		throw Error('Method "getLeechs" is not implemented.');
	}

	/**
	 * Get seeds count
	 * @return {number}
	 */
	get seeds() {
		throw Error('Method "getSeeds" is not implemented.');
	}

	/**
	 * Get torrent hash
	 * @return {string}
	 */
	get hash() {
		throw Error('Method "getHash" is not implemented.');
	}

	/**
	 * Get size of all files included in torrent (in bytes)
	 * @return {number}
	 */
	get size() {
		throw Error('Method "getSize" is not implemented.');
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
