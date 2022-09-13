const { saveOne, saveInit, readAll, search, edit, deleteOne } = require('../db/database.js');

module.exports = {
  handleInitialData: (req, res) => {
    saveInit((err) => {
      if (err) {
        console.error(err);
      } else {
        res.send('initial data saved to db');
      }
    })
  },

  handleGetRequest: (req, res) => {
    readAll((err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    })

  },

  handlePostRequest: (req, res) => {
    var word = req.body.word;
    var definition = req.body.definition;
    saveOne({ word, definition }, (err) => {
      if (err) {
        console.error(err);
      } else {
        readAll((err, data) => {
          if(err) {
            console.error(err);
          } else {
            res.send(data);
          }
        })
      }

    })
  },

  handleSearchRequest: (req, res) => {
    var keyword = req.body.keyword;
    search(keyword, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }

    })
  },

  handleEditRequest: (req, res) => {
    var oldEntry = req.body.oldEntry;
    var newEntry = req.body.newEntry;
    edit(oldEntry, newEntry, (err) => {
      if (err) {
        console.log(err);
      } else {
        readAll((err, data) => {
          if (err) {
            console.error(err);
          } else {
            res.send(data);
          }
        })
      }

    })
  },

  handleDeleteRequest: (req, res) => {
    var word = req.body.word;
    deleteOne(word, (err) => {
      if(err) {
        console.error(err);
      } else {
        readAll((err, data) => {
          if(err) {
            console.error(err);
          } else {
            res.send(data);
          }
        })
      }

    })
  }
}