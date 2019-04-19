
var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.use(express.static('src'));

app.use('/accordion', express.static('accordion.html'));

app.use('/carousel', express.static('carousel.html'));

app.use('/grid', express.static('grid.html'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
