# Tracker Proxy

## Description

This package provide one interface which can be used for working with many differ torrent-trackers as like as one.

## Features

- One interface
- Simple usage
- Can using user-write tracker adapters (soon)
- Flexibility
- ES6

## Installation

```
npm install --save tracker-proxy
```

## Usage

```javascript
const trackerProxy = require('tracker-proxy');

let trackerManager = new trackerProxy.Manager();

trackerManager.include(new trackerProxy.adapters.KAT());
trackerManager.include(new trackerProxy.adapters.TPB());

trackerManager.on(trackerManager.EVENT_SEARCH_RESPONSE, (tracker, torrents) => {
	console.log(`Tracker ${tracker.getUrl()} search response:`);
	torrents.forEach(torrent => {
		console.log(`\t${torrent.title}`);
	});
});

trackerManager.search({ query: query }); // PROFIT!
```

## TODO

- Full test coverage
- More adapters for different tracker
- Add full interface description to README
