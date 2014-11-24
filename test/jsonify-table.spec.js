'use strict';
var expect   = require('expect.js')
  , JSONify  = require('../index')
  , catchErr = require('catch-error');

describe('JSONify-table module', function(){
  it('should return an object', function(){
    //arrange
    //act
    var result = JSONify();
    // assert
    expect(result).to.be.an('object');
  });
});
