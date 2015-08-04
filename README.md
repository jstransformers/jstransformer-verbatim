# jstransformer-verbatim

Transformer that acts as a transparent pass-through, but adds new lines on both ends.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-verbatim/master.svg)](https://travis-ci.org/jstransformers/jstransformer-verbatim)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-verbatim/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-verbatim?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-verbatim/master.svg)](http://david-dm.org/jstransformers/jstransformer-verbatim)
[![NPM version](https://img.shields.io/npm/v/jstransformer-verbatim.svg)](https://www.npmjs.org/package/jstransformer-verbatim)

## Installation

    npm install jstransformer-verbatim

## API

```js
var verbatim = require('jstransformer')(require('jstransformer-verbatim'))

verbatim.render('blah').body
//=> '\nblah\n'
```

## License

MIT
