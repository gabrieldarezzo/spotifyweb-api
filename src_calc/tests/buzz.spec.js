/*
Desafio:

Escreva:
Se o número for divisivel por 3, no lugar do número escreva 'Fizz'
Se o número for divisivel por 5, no lugar do número escreva 'Buzz'
Se o número for divisivel por 3 e 5, no lugar do número escreva 'FizzBuzz'
Se o não for multiplo de nada retorna o número

*/

import { expect } from 'chai';
import { FizzBuzz } from '../src/buzz.js';

describe('Buzz', function(){

  it('Should return `Fizz` when multiple of 3 ', function(){
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });


  it('Should return `Buzz` when multiple of 5 ', function(){
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('Should return `FizzBuzz` when multiple of 3 and 5', function(){
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should self number when non-multiple', function(){
    expect(FizzBuzz(2)).to.be.equal(2);
  });

});
