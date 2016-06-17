


/**
 * Common torrent interface
 * @interface
 */
ITorrent = function() {};


/**
 * @return {string}
 */
ITorrent.prototype.getTitle = function() {};


/**
 * @return {string}
 */
ITorrent.prototype.getPageUrl = function() {};


/**
 * @return {string}
 */
ITorrent.prototype.getTorrentUrl = function() {};


/**
 * @return {Date}
 */
ITorrent.prototype.getPublicationDate = function() {};


/**
 * @return {number}
 */
ITorrent.prototype.getFilesCount = function() {};


/**
 * @return {number}
 */
ITorrent.prototype.getPeers = function() {};


/**
 * @return {number}
 */
ITorrent.prototype.getLeechs = function() {};


/**
 * @return {number}
 */
ITorrent.prototype.getSeeds = function() {};


/**
 * @return {string}
 */
ITorrent.prototype.getHash = function() {};


/**
 * Get size in bytes
 * @return {number}
 */
ITorrent.prototype.getSize = function() {};
