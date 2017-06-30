# is-7z

[![Greenkeeper badge](https://badges.greenkeeper.io/t1st3/is-7z.svg)](https://greenkeeper.io/)

[![NPM version](https://img.shields.io/npm/v/is-7z.svg)](https://www.npmjs.com/package/is-7z)
[![Build Status](https://travis-ci.org/t1st3/is-7z.svg?branch=master)](https://travis-ci.org/t1st3/is-7z)

> Check if a Buffer/Uint8Array is a [7Z](https://en.wikipedia.org/wiki/7z) archive.


## Install

```sh
$ npm install --save is-7z
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var is7z = require('is-7z');
var buffer = readChunk.sync('unicorn.7z', 0, 6);

is7z(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.7z');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	is7z(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### is7z(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 6 bytes.


## License

MIT © [t1st3](http://www.tiste.org)
