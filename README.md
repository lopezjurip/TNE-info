# TNE-info
[![npm version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url] [![dependencies][dependencies-image]][dependencies-url] [![lint][lint-image]][lint-url]

> Disclamer: This is made with learning purposes, use by your own responsability.

## Install
This project uses ES6, so make sure your [Node version is compatible](https://nodejs.org/en/docs/es6/).
```sh
$ npm install --save tne-info
```

## Usage
```js
'use strict';

const tne = require('tne-info');

tne('XXXXXXXX-7').then(info => {
  console.log(info);
}).catch(err => {
  console.log('Invalid rut', err);
})
```

This prints:
```js
{ pers_run: 'XXXXXXXX',
  pers_dv_run: '7',
  pers_primer_nombre: 'NAME',
  pers_apellido_paterno: 'LASTNAME',
  regi_nombre: 'REGION',
  inst_rbd: 'NUMBER',
  tipo_pase: 'PASS TYPE',
  cd: 'ID',
  folio_tne: '**FOLIO',
  estado_tne: 'STATUS',
  estado_tne_priv: 'DELIVERY',
  sello: 'AVAILABLE',
  vigencia: 'YEAR',
  fec_recepcion: 'AVAILABLE',
  periodo: 'YEAR',
  regi_romano: 'INVALID' }
```


[ci-image]: https://travis-ci.org/mrpatiwi/TNE-info.svg
[ci-url]: https://travis-ci.org/mrpatiwi/TNE-info
[npm-image]: https://badge.fury.io/js/tne-info.svg
[npm-url]: http://badge.fury.io/js/tne-info
[dependencies-image]: https://david-dm.org/mrpatiwi/tne-info.svg
[dependencies-url]: https://david-dm.org/mrpatiwi/tne-info
[lint-image]: https://codeclimate.com/github/mrpatiwi/TNE-info/badges/gpa.svg
[lint-url]: https://codeclimate.com/github/mrpatiwi/TNE-info
