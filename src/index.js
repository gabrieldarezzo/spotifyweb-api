/* global fetch */
import album from './album';
import search from './search';

import { API_URL, TOKEN_API } from './config';
import toJSON from './utils';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token || TOKEN_API;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  // class-methods-use-this ???
  request(urlParam) { // eslint-disable-line

    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(urlParam, headers).then(toJSON);
  }
}
