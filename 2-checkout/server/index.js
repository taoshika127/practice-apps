require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
//app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/form', (req, res) => {
  if(!req.get("Cookie")) {
    sessionHandler(req, res, () => {
      db.connect((err) => {
        if(err) {
          console.error(err)
        } else {
          var q = db.saveQuery(req.body);
          db.query(q, () => {
            console.log('saved to db');
            res.send('Purchase successful');
          })
        }
      })
    })
  } else {
    res.send('You have already purchased!');
  }
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
