const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });


db.connectAsync()
.then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
.then(() => {
  // Expand this table definition as needed:
  db.queryAsync(
    "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), address VARCHAR(255), city VARCHAR(255), state VARCHAR(255), zipcode INT, creditCard VARCHAR(255), expirationDate VARCHAR(255), CVV INT, billingZipcode INT)"
  )}
)
.catch((err) => console.log(err));


db.saveQuery = (data) => {
  var name = data.name;
  var email = data.email;
  var address = data.address;
  var city = data.city;
  var state = data.state;
  var zipcode = data.zipcode;
  var creditCard = data.creditCard;
  var expirationDate = data.expirationDate;
  var cvv = data.cvv;
  var billingZipcode = data.billingZipcode;
  var query = `INSERT INTO responses (name, email, address, city, state, zipcode, creditCard, expirationDate, cvv, billingZipcode) VALUES('${name}', '${email}', '${address}', '${city}', '${state}', '${zipcode}', '${creditCard}', '${expirationDate}', '${cvv}', '${billingZipcode}');`;
  return query;
}

  module.exports = db;
