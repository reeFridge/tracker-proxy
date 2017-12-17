'use strict';

const AbstractSearchResponse = require('../../../classes/abstract-search-response');
const Torrent = require('../../../classes/torrent');

class SearchResponse extends AbstractSearchResponse {
	constructor() {
		super();
	}

	/**
	 * Returns an array of search results
     [
     {
       name: 'Game of Thrones (2014)(dvd5) Season 4 DVD 1 SAM TBS',
       size: '4.17 GiB',
       link: 'http://thepiratebay.se/torrent/10013794/Game_of_Thron...'
       category: { id: '200', name: 'Video' },
       seeders: '125',
       leechers: '552',
       uploadDate: 'Today 00:57',
       magnetLink: 'magnet:?xt=urn:btih:4e6a2304fed5841c04b16d61a0ba...
       subcategory: { id: '202', name: 'Movies DVDR' }
     },
     ...
     ]
	 * @override
	 */
	_parseResponseData(data) {
		return new Promise((resolve, reject) => {
			let torrents = [];
			try {
				data.forEach(torrent => {
					torrents.push(new Torrent({
						title: torrent.name,
						pageUrl: torrent.link,
						magnet: torrent.magnetLink,
						leechs: torrent.leechers,
						seeds: torrent.seeders,
						size: torrent.size,
						hash: 'null'
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
