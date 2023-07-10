const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require('./models');

const userRoot = require('./routes/Users');
app.use('/auth', userRoot);

db.sequelize.sync().then(() => {
    app.listen(3001, () => console.log("server started on port 3001"));
});