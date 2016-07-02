'use strict';

/** @interface */
const ITorrent = require('../interfaces/i-torrent');

/**
 * Common Torrent class
 * @implements {ITorrent}
 * @extends {EventEmitter}
 */
class Torrent extends ITorrent {
	constructor() {
		super();

		/**
		 * @type {string}
		 * @protected
		 */
		this._title = '';

		/**
		 * @type {string}
		 * @protected
		 */
		this._pageUrl = '';

		/**
		 * @type {string}
		 * @protected
		 */
		this._torrentUrl = '';

		/**
		 * @type {string}
		 * @protected
		 */
		this._magnet = '';

		/**
		 * @type {Date}
		 * @protected
		 */
		this._publicationDate = new Date();

		/**
		 * @type {Array.<File>}
		 * @protected
		 */
		this._files = [];

		/**
		 * @type {number}
		 * @protected
		 */
		this._peers = 0;

		/**
		 * @type {number}
		 * @protected
		 */
		this._leechs = 0;

		/**
		 * @type {number}
		 * @protected
		 */
		this._seeds = 0;

		/**
		 * @type {string}
		 * @protected
		 */
		this._hash = '';

		/**
		 * @type {number}
		 * @protected
		 */
		this._size = '';
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


module.exports = Torrent;