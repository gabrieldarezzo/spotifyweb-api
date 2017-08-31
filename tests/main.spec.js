var expect = require('chai').expect;

describe('Main', function(){
  var arr;

  beforeEach(function(){
    arr = [1,2,3];
  });

  it('should be a array', function(){
    expect(arr).to.a('array');
  });

  it('should be a array with numbers', function(){
    arr.map(function(i){
      expect(i).to.a('number');
    });
  });

  it('Should have a size of 4 when push another value to the array', function(){
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('Should remove 3 when pop in array', function(){
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('Should have a size of 2 when a pop in array', function(){
    arr.pop();
    expect(arr).to.have.include(2);
  });
});
