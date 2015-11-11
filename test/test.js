'use strict';

const chai = require('chai');
chai.use(require("chai-as-promised"));
const should = chai.should();

const tne = require('../index');

describe('tne-info', () => {
  it('should fail with valid rut', () => {
    tne('XXXXXXXX-7').should.be.rejected;
  });
});
