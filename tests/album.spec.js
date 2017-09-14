import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src/index';


chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');


describe('Album', () => {
  let spotify;
  let fetchStub;
  let promise;

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
    it('should exist the getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });


    it('should exist the getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should exist the getAlbumTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });


  describe('getAlbum', () => {
    it('should call fetch function', () => {
      spotify.album.getAlbum();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');


      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTyi');
      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTyi');
    });

    it('should return correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });


  describe('getAlbums', () => {
    it('should call fetch function', () => {
      spotify.album.getAlbums();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTy']);

      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTy');
    });

    it('should return correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTy']);
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });


  describe('getTracks', () => {
    it('should call fetch function', () => {
      spotify.album.getTracks();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');

      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
