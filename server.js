const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

const apiRoutes = require('./routes/htmlRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);
