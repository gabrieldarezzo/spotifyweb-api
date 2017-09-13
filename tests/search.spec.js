import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';


chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');


describe('Search', () => {
  let fetchStub;
  let promise;

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });

  afterEach(() => {
    fetchStub.restore();
  });


  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });


  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchStub).to.have.been.calledOnce;
    });


    it('should receive the correct url', () => {
      context('passing one type - artist', () => {
        const artists = search('Incubus', 'artist');
        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
      });

      context('passing one type - album', () => {
        const albums = search('Incubus', 'album');

        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });


      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);
        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const artists = searchArtists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artists2 = searchArtists('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const album = searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const album2 = searchAlbums('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=album');
    });
  });


  describe('searchTracks', () => {
    it('should call fetch function', () => {
      searchTracks('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = searchTracks('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=track');
    });
  });

  // searchPlaylists
  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      searchPlaylists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const playlist = searchPlaylists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlist2 = searchPlaylists('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=playlist');
    });
  });
});

