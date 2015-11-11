'use strict';

const tne = require('../index');

tne('XXXXXXXX-7').then(info => {
  console.log(info);
}).catch(err => {
  console.log('Invalid rut', err);
})
