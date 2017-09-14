/* global SpotifyWrapper */

const spotify = new SpotifyWrapper({
  token: 'BQDUJ_tY2BfUpRJ6vVs-0adJMg3DUoUda_ywPjeqjOCMq6OPeoeEmeGUIq7HMM8o_oXnTjypIn3krZkh7pNPCRKDY3xUfxtxSu8v9cgpHptq4_sX7tQ8cInngpIYLtb8Qu8SXx8F2sQprNiDkSoTaA',
});

const albums = spotify.search.albums('Soundgarden');
const albumsEl = document.getElementById('albums');

albums
  .then((data) => {
    const markup = data.albums.items.map(item => `<img src='${item.images[0].url}' alt='${item.name}' />`)
      .join('');

    albumsEl.innerHTML = markup;
  });
