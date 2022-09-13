require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);
const Schema = mongoose.Schema;
const { seedFunc } = require('./fakerAPI.js');


const glossarySchema = new Schema({
  word: String,
  definition: String
})

const Glossaries = mongoose.model('Glossaries', glossarySchema);

module.exports = {
  saveOne: ({ word, definition }, cb) => {
    Glossaries.findOneAndUpdate({ word }, { word, definition }, {upsert: true})
      .then(() => {
        if (cb) {
          cb(null);
        } else {
          return;
        }
      })
      .catch(err => {
        cb(err)
      })
  },

  saveInit: (cb) => {
    var promises = [];
    var wordList = seedFunc(5);
    Glossaries.find().then((data) => {
      if(data.length < 5) {
        var add = 5 - data.length;
        wordList.slice(0, add).forEach(entry => {
          promises.push(module.exports.saveOne(entry));
        });
        Promise.all(promises)
          .then(() => {
            cb(null);
          })
          .catch(err => {
            cb(err);
          })
      } else {
        cb(null);
      }
    })
  },

  readAll: (cb) => {
    Glossaries.find()
      .then((data) => {
        cb(null, data.reverse());
      })
      .catch(err => {
        cb(err);
      })
  },

  search: (keyword, cb) => {
    Glossaries.find({$or: [{word: keyword}, {definition: {$regex: keyword, $options: 'i'}}]})
      .then(data => {
        cb(null, data.reverse());
      })
      .catch(err => {
        cb(err);
      })
  },

  edit: (oldEntry, newEntry, cb) => {
    Glossaries.findOneAndUpdate({word: oldEntry.word}, {word: newEntry.word, definition: newEntry.definition}, {upsert: true})
      .then(cb(null))
      .catch(err => {
        cb(err)
      })
  },

  deleteOne: (word, cb) => {
    Glossaries.deleteOne({word}, (err) => {
      if (err) {
        cb(err);
      } else {
        cb(null)
      }
    })
  }

}


