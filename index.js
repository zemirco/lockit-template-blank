'use strict';

var readFile = require('fs').readFile;
var join = require('path').join;
var render = require('ejs').render;

module.exports = function(title, content, cb) {

  // read html file
  readFile(join(__dirname, 'index.html'), 'utf8', function(err, data) {
    if (err) {return cb(err); }

    // set local variables
    var locals = {
      title: title,
      content: content
    };

    // create html
    var html = render(data, locals);

    // return modified html content
    cb(null, html);
  });

};
