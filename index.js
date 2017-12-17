'use strict';

const DIR_CLASSES = './src/classes';
const DIR_ADAPTERS = './src/adapters';

exports.base = {
	AbstractSearchResponse: require(`${DIR_CLASSES}/abstract-search-response`),
	AbstractTrackerAdapter: require(`${DIR_CLASSES}/abstract-tracker-adapter`),
	Torrent: require(`${DIR_CLASSES}/torrent`)
};

exports.adapters = {
	TPB: require(`${DIR_ADAPTERS}/tpb`)
};

exports.Manager = require(`${DIR_CLASSES}/tracker-manager`);
