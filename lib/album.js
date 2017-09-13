'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var getAlbum = exports.getAlbum = function getAlbum(album) {
  return fetch(_config2.default + '/albums/' + album).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config2.default + '/albums/?ids=' + ids).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config2.default + '/albums/' + id + '/tracks').then(_utils.toJSON);
};