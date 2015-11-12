var expect = require('chai').expect;
var ElementHeight = require('../index');

describe('element-height', function() {
  it('returns a value', function() {
    expect(ElementHeight()).to.be.equal(10);
  });
});
