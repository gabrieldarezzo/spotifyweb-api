import { API_URL, TOKEN_API } from './config';


import {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists,
} from './search';


import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';

// module.exports = {
//   search,
//   searchArtists,
//   searchAlbums,
//   searchTracks,
//   searchPlaylists,
//   getAlbum,
//   getAlbums,
//   getAlbumTracks,
// };

export class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token || TOKEN_API;
  }

  request(url) {
    return fetch(url);

  }

}
