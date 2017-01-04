var webpack   = require('webpack');
var path      = require('path');

var BUILD_DIR = path.join(__dirname, '/build');
var APP_DIR   = path.join(__dirname, '/src');

var config = {
  entry : APP_DIR + '/app.js',
  output : {
    path : BUILD_DIR,
    filename : 'bundle.js'
  },
  module : {
    loaders : [ 
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel',
        query : {
          presets : ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;