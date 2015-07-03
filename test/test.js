'use strict';

var should = require('should');
var template = require('../index.js');

describe('lockit-template-blank', function() {

  it('should replace title and content', function(done) {
    var title = 'super test title';
    var content = 'super test content';
    template(title, content, function(err, html) {
      if (err) {console.log(err); }
      html.should.containEql('<title>super test title</title>');
      html.should.containEql('<body>super test content</body>');
      done();
    });
  });

  it('should work with html tags', function(done) {
    var title = 'another super test title';
    var content = '<h1>another super content</h1>';
    template(title, content, function(err, html) {
      if (err) {console.log(err); }
      html.should.containEql('<body><h1>another super content</h1></body>');
      done();
    });
  });

  it('should work with ejs code', function(done) {
    var title = 'third super test title';
    var content = 'Welcome to <%- appname %>';

    template(title, content, function(err, html) {
      if (err) {console.log(err); }
      html.should.containEql('<body>Welcome to <%- appname %></body>');
      done();
    });
  });

});
