'use strict';

/** @interface */
const ITorrent = require('../interfaces/i-torrent');

/**
 * Common Torrent class
 * @param {MetaData} metaData
 * @implements {ITorrent}
 * @extends {EventEmitter}
 */
class Torrent extends ITorrent {
	constructor(metaData) {
		super();

		/**
		 * @type {string}
		 * @protected
		 */
		this._title = metaData.title || '';

		/**
		 * @type {string}
		 * @protected
		 */
		this._pageUrl = metaData.pageUrl || '';

		/**
		 * @type {string}
		 * @protected
		 */
		this._torrentUrl = metaData.torrentUrl || '';

		/**
		 * @type {string}
		 * @protected
		 */
		this._magnet = metaData.magnet || '';

		/**
		 * @type {Date}
		 * @protected
		 */
		this._publicationDate = metaData.publicationDate || new Date();

		/**
		 * @type {Array.<File>}
		 * @protected
		 */
		this._files = [];

		/**
		 * @type {number}
		 * @protected
		 */
		this._peers = metaData.peers || 0;

		/**
		 * @type {number}
		 * @protected
		 */
		this._leechs = metaData.leechs || 0;

		/**
		 * @type {number}
		 * @protected
		 */
		this._seeds = metaData.seeds || 0;

		/**
		 * @type {string}
		 * @protected
		 */
		this._hash = metaData.hash || '';

		/**
		 * @type {number}
		 * @protected
		 */
		this._size = metaData.size || '';
	}

	/**
	 * @inheritDoc
	 */
	getTitle() {
		return this._title;
	}

	/**
	 * @inheritDoc
	 */
	getPageUrl() {
		return this._pageUrl;
	}

	/**
	 * @inheritDoc
	 */
	getTorrentUrl() {
		return this._torrentUrl;
	}

	/**
	 * @inheritDoc
	 */
	getMagnet() {
		return this._magnet;
	}

	/**
	 * @inheritDoc
	 */
	getPublicationDate() {
		return this._publicationDate;
	}

	/**
	 * @inheritDoc
	 */
	getFiles() {
		//TODO: Get files and folders in torrent on demand
		return this._files;
	}

	/**
	 * @inheritDoc
	 */
	getPeers() {
		return this._peers;
	}

	/**
	 * @inheritDoc
	 */
	getLeechs() {
		return this._leechs;
	}

	/**
	 * @inheritDoc
	 */
	getSeeds() {
		return this._seeds;
	}

	/**
	 * @inheritDoc
	 */
	getHash() {
		return this._hash;
	}

	/**
	 * @inheritDoc
	 */
	getSize() {
		return this._size;
	}
}


/**
 * @typedef {{
 *     title: string,
 *     pageUrl: string,
 *     torrentUrl: string,
 *     magnet: string,
 *     publicationDate: Date,
 *     peers: number,
 *     leechs: number,
 *     seeds: number,
 *     hash: string,
 *     size: number
 * }} MetaData
 */


module.exports = Torrent;