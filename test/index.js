'use strict';

var fs = require('fs');
var join = require('path').join;

var transform = require('../');

var output;
var failed = false;

function assertEqual(output, expected) {
  console.log('Output:  ', JSON.stringify(output));
  console.log('Expected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('FAILED');
    failed = true;
  } else {
    console.log('PASSED');
  }
}

var input = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8');
var expected = fs.readFileSync(join(__dirname, 'expected.txt'), 'utf8');
try {
  output = transform.render(input);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

console.log('\nTests ' + (failed ? 'FAILED' : 'PASSED'));

if (failed) process.exit(1);
