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
	getTitle() {
		throw Error('Method "getTitle" is not implemented.');
	}

	/**
	 * Get torrent page url
	 * @return {string}
	 */
	getPageUrl() {
		throw Error('Method "getPageUrl" is not implemented.');
	}

	/**
	 * Get torrent file url
	 * @return {string}
	 */
	getTorrentUrl() {
		throw Error('Method "getTorrentUrl" is not implemented.');
	}

	/**
	 * Get magnet uri
	 * @return {string}
	 */
	getMagnet() {
		throw Error('Method "getMagnet" is not implemented.');
	}

	/**
	 * Get torrent publication date
	 * @return {Date}
	 */
	getPublicationDate() {
		throw Error('Method "getPublicDate" is not implemented.');
	}

	/**
	 * Get array of files in the torrent
	 * @return {Array.<File>}
	 */
	getFiles() {
		throw Error('Method "getFiles" is not implemented.');
	}

	/**
	 * Get peers count
	 * @return {number}
	 */
	getPeers() {
		throw Error('Method "getPeers" is not implemented.');
	}

	/**
	 * Get leechs count
	 * @return {number}
	 */
	getLeechs() {
		throw Error('Method "getLeechs" is not implemented.');
	}

	/**
	 * Get seeds count
	 * @return {number}
	 */
	getSeeds() {
		throw Error('Method "getSeeds" is not implemented.');
	}

	/**
	 * Get torrent hash
	 * @return {string}
	 */
	getHash() {
		throw Error('Method "getHash" is not implemented.');
	}

	/**
	 * Get size of all files included in torrent (in bytes)
	 * @return {number}
	 */
	getSize() {
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
