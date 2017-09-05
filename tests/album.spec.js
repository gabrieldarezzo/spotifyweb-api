import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';


chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');


describe('Album', () => {

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
        it('should exist the getAlbum method', () => {
          expect(getAlbum).to.exist;
        });


        it('should exist the getAlbums method', () => {
          expect(getAlbums).to.exist;
        });

        it('should exist the getAlbumTracks method', () => {
          expect(getAlbumTracks).to.exist;
        });


    });


  describe('getAlbum', () => {

    it('should call fetch function', () => {
      const artists = getAlbum();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');


      getAlbum('4aawyAB9vmqN3uQ7FjRGTyi');
        expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTyi');
    });

    it('should return correct data from Promise', () => {
      promise.resolves({album : 'name'})
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({album : 'name'});
    });

  });


  describe('getAlbums', () => {

    it('should call fetch function', () => {
      const artists = getAlbums();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {



      getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTy']);

      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTy');
    });

    it('should return correct data from Promise', () => {
      promise.resolves({album : 'name'})
      const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTy']);
      expect(album.resolveValue).to.be.eql({album : 'name'});
    });

  });


  describe('getAlbumTracks', () => {

    it('should call fetch function', () => {
      const artists = getAlbumTracks();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {

      getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');

      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return correct data from Promise', () => {
      promise.resolves({album : 'name'})
      const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({album : 'name'});

    });

  });



});
