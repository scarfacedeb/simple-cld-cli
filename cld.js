#!/usr/bin/env node

var options = {
  isHTML: false
};

var cli = require('cli');
var cld = require('cld');

cli.withStdinLines(function(lines, newline) {
  var that = this;
  var text = lines.join(newline);

  cld.detect(text, options, function(err, result) {
    that.output(JSON.stringify(result));
  });
});
