
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

module.exports = function(title, content, cb) {
  
  // read html file
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function(err, data) {
    if (err) return cb(err);
    
    // set local variables
    var locals = {
      title: title,
      content: content
    };
    
    // create html
    var html = ejs.render(data, locals);
    
    // return modified html content
    cb(null, html);
  });
  
};