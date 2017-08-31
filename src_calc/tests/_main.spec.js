import { expect, assert } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';

describe('Calc', function(){

  //Smoke tests
  describe('Smoke tests', function(){

    it('should exists the method `sum`', function(){
      assert.isFunction(sum);
    });


    it('should exists the method `sub`', function(){
      assert.isFunction(sub);
    });

    it('should exists the method `mult`', function(){
      assert.isFunction(mult);
    });

    it('should exists the method `div`', function(){
      assert.isFunction(div);
    });
  });

  describe('Sum', function(){
    it('should return 4 when sum (2,2)', function(){
      expect(sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', function(){
    it('should return 4 when sub (6,2)', function(){
      expect(sub(6,2)).to.be.equal(4);
    });

    it('should return -4 when sub (6,10)', function(){
      expect(sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Mult', function(){
    it('should return 4 when mult(2,2)', function(){
      expect(mult(2,2)).to.be.equal(4);
    });
  });

  describe('Did', function(){
    it('should return 4 when div(4,2)', function(){
      expect(div(4,2)).to.be.equal(2);
    });


  });

});

