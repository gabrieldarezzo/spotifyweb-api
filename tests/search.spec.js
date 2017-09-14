import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src/index';


chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');


describe('Search', () => {
  let fetchStub;
  let promise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });

  afterEach(() => {
    fetchStub.restore();
  });


  describe('smoke tests', () => {

    it('should exist the search.albums method', () => {

      expect(spotify.search.albums).to.exist;
    });

    it('should exist the search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('search.artists()', () => {
    it('should call fetch function', () => {
      spotify.search.artists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      spotify.search.artists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      spotify.search.artists('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=artist');
    });
  });

  describe('search.albums', () => {
    it('should call fetch function', () => {
      spotify.search.albums('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      spotify.search.albums('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      spotify.search.albums('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=album');
    });
  });


  describe('searchTracks', () => {
    it('should call fetch function', () => {
      spotify.search.tracks('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      spotify.search.tracks('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      spotify.search.tracks('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=track');
    });
  });

  // searchPlaylists
  describe('search.playlists', () => {
    it('should call fetch function', () => {
      spotify.search.playlists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      spotify.search.playlists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      spotify.search.playlists('Metallica');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Metallica&type=playlist');
    });
  });
});

