# tracker-proxy

## Description  

This package provide one interface which can be used for working with many differ torrent-trackers as like as one.

## Features

- One interface
- Simple usage
- Can using user-write tracker adapters
- Flexibility
- Use ES6 features
- Test coverage

## Usage

```javascript
const Tracker = require('tracker-proxy');
const yourTrackerAdapter = require('./your-tracker-adapter');
let tracker = new Tracker();
tracker.include(yourTrackerAdapter);
let searchResponse = [];

tracker.on('ready', function() {
    tracker.search('X-Weapon')
        .then(function(response) {
            searchResponse = response;
        })
        .catch(function(err) {
            throw err;
        });
};
```

## TODO

- Add full interface description
- Add more usage example
