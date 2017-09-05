global.fetch = require('node-fetch');
import { searchAlbums } from '../src/main';

const albums = searchAlbums('Metallica');


albums
    // .then(data => console.log(data.toString()))
    .then(data => console.log(data))
    //.map(function () { return new MensagemCadastro('Foto incluida com sucesso', true); })



    .catch(err => console.log(err));


//albums.then(data => data.albums.items.map(item => console.log(item.name)));


/*
//albums.then

//Load the HTTP library 
var http = require("http");

//Create an HTTP server to handle responses 
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
*/