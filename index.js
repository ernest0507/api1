const express = require('express');
const app = express();
const cors = require('cors');
const os = require('os');

app.use(express.json());
app.use(cors());
const db = require('./models');

const userRoot = require('./routes/Users');
app.use('/auth', userRoot);

app.get('/', function(req, res) {
    var domain = req.headers.host;
    var parts  = domain.split(".");
    var subdomain = parts.length == 2 ? "www" : parts[0]; 
    console.log(subdomain)
});

db.sequelize.sync().then(() => {
    app.listen(3001, () => console.log("server started on port 3001"));
    console.log(os.hostname());
});
