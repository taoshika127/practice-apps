require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { handleInitialData, handleGetRequest, handlePostRequest, handleSearchRequest, handleEditRequest, handleDeleteRequest } = require('./requestHandler.js');
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/src')))
app.use(express.json());
app.get('/data', handleInitialData);

app.get('/home', handleGetRequest);

app.post('/', handlePostRequest);

app.post('/search', handleSearchRequest);

app.post('/edit', handleEditRequest);

app.post('/delete', handleDeleteRequest);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})