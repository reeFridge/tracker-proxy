'use strict';

const AbstractQueryResponse = require('../../../classes/abstract-query-response');
const Torrent = require('../../../classes/torrent');

class QueryResponse extends AbstractQueryResponse {
	constructor(responseData) {
		super(responseData);
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


module.exports = QueryResponse;
