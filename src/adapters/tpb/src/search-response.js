'use strict';

const AbstractSearchResponse = require('../../../classes/abstract-search-response');
const Torrent = require('../../../classes/torrent');

class SearchResponse extends AbstractSearchResponse {
	constructor() {
		super();
	}

	/**
	 * @override
	 */
	_parseResponseData(data) {
		return new Promise((resolve, reject) => {
			let torrents = [];
			try {
				data.forEach(torrent => {
					torrents.push(new Torrent({
						title: torrent.title,
						pageUrl: torrent.url,
						magnet: torrent.magnet,
						leechs: torrent.leechers,
						seeds: torrent.seeders,
						size: torrent.size,
						hash: torrent.hash
					}));
				});
			} catch(err) {
				reject(err);
			}
			resolve(torrents);
		});
	}
}


module.exports = SearchResponse;
