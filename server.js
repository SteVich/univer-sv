//Install express server
const cors = require('express');
const express = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static('./dist/univer-sv'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/univer-sv/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
