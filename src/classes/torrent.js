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
	get title() {
		return this._title;
	}

	/**
	 * @inheritDoc
	 */
	get pageUrl() {
		return this._pageUrl;
	}

	/**
	 * @inheritDoc
	 */
	get torrentUrl() {
		return this._torrentUrl;
	}

	/**
	 * @inheritDoc
	 */
	get magnet() {
		return this._magnet;
	}

	/**
	 * @inheritDoc
	 */
	get publicationDate() {
		return this._publicationDate;
	}

	/**
	 * @inheritDoc
	 */
	get files() {
		//TODO: Get files and folders in torrent on demand
		return this._files;
	}

	/**
	 * @inheritDoc
	 */
	get peers() {
		return this._peers;
	}

	/**
	 * @inheritDoc
	 */
	get leechs() {
		return this._leechs;
	}

	/**
	 * @inheritDoc
	 */
	get seeds() {
		return this._seeds;
	}

	/**
	 * @inheritDoc
	 */
	get hash() {
		return this._hash;
	}

	/**
	 * @inheritDoc
	 */
	get size() {
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