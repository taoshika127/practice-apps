require("dotenv").config();

const path = require("path");
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const SRC_DIR = path.join(__dirname, './client/src');
const DIST_DIR = path.join(__dirname, './client/dist');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/i,
          loader: 'babel-loader',
      },
      {
          test: /\.css$/i,
          use: [stylesHandler,'css-loader'],
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';


  } else {
      config.mode = 'development';
  }
  return config;
}
