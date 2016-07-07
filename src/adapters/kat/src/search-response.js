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
				data.list.forEach(torrent => {
					torrents.push(new Torrent({
						title: torrent.title,
						pageUrl: torrent.link,
						torrentUrl: torrent.torrentLink,
						magnet: torrent.magnetLink,
						publicationDate: new Date(torrent.pubDate),
						peers: torrent.peers,
						leechs: torrent.leechs,
						seeds: torrent.seeds,
						hash: torrent.hash,
						size: torrent.size
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
