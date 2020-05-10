//Install express server
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();


// Serve only the static files form the dist directory
app.use(express.static('./dist/univer-sv'));
app.use(cors());
app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/univer-sv/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
