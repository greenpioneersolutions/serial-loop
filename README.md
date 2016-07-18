# Serial-loop

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![Dependency Status](https://david-dm.org/greenpioneersolutions/serial-loop.svg)](https://david-dm.org/greenpioneersolutions/serial-loop)
[![devDependency Status](https://david-dm.org/greenpioneersolutions/serial-loop/dev-status.svg)](https://david-dm.org/greenpioneersolutions/serial-loop#info=devDependencies)
[![npm-issues](https://img.shields.io/github/issues/greenpioneersolutions/serial-loop.svg)](https://github.com/greenpioneersolutions/serial-loop/issues)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/greenpioneersolutions/serial-loop.svg?branch=master)](https://travis-ci.org/greenpioneersolutions/serial-loop)
[![js-standard-style](https://nodei.co/npm/serial-loop.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/serial-loop.png?downloads=true&downloadRank=true&stars=true)

[npm-image]: https://img.shields.io/npm/v/serial-loop.svg?style=flat
[npm-url]: https://npmjs.org/package/serial-loop
[downloads-image]: https://img.shields.io/npm/dm/serial-loop.svg?style=flat
[downloads-url]: https://npmjs.org/package/serial-loop


## Install

```bash
$ npm i -s serial-loop
```

## Usage

```js
var loop = require('serial-loop')

loop(10, each, function (error) {
  console.log('done, error? ', error)
});

function each (next, i) {
  setTimeout(function () {
    console.log(i)
    next()
  }, 1000)
}
```

Will output:

```
0
1
2
3
3
4
5
6
7
8
9
```

## Roadmap

```javascript
// 3.0 - Take over package, Update in es5 using standardjs
// 4.0 - Update to es6 , make it dynamic to not need len.
```
