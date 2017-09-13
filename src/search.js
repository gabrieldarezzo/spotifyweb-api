import API_URL from './config';
import { toJSON } from './utils';

export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`)
  .then(toJSON);
  // .catch(err => console.log(err))

  /*
  .catch((err) => {
    console.log(err);

    console.error(query, type);
    console.error(err.toString());
    console.error(`${API_URL}/search?q=${query}&type=${type}`);

  })
  */

export const searchArtists = query => search(query, 'artist');

export const searchAlbums = query => search(query, 'album');

export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');

