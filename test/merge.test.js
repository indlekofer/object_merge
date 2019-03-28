import assert from 'assert';
import merge from '../src/index';

describe('merge', () => {
  it('merge', () => {
    assert.equal(
      JSON.stringify(merge([{test1: 1}, {test2: 2, test3: 3}])),
      JSON.stringify({test1:1, test2:2, test3:3})
    );
  });
  it('merge empty 1', () => {
    assert.equal(
      JSON.stringify(merge([{test2: 2, test3: 3}])),
      JSON.stringify({test2:2, test3:3})
    );
  });
  it('merge empty 2', () => {
    assert.equal(
      JSON.stringify(merge([{test: 1}, {}])),
      JSON.stringify({test:1})
    );
  });
  it('merge with overwrite', () => {
    assert.equal(
      JSON.stringify(merge([{test1: 1, test2: 2}, {test2: 3}])),
      JSON.stringify({test1: 1, test2: 3})
    );
  });
  it('merge with 2 objects with overwrite', () => {
    assert.equal(
      JSON.stringify(merge([{test: 1, test2: 2}, {test2: 3}])),
      JSON.stringify({test: 1, test2: 3})
    );
  });
  it('merge with 3 objects with overwrite', () => {
    assert.equal(
      JSON.stringify(merge([{test: 1, test2: 2}, {test2: 3}, {test2: 4}])),
      JSON.stringify({test: 1, test2: 4})
    );
  });
  it('ignore prototype', () => {
    function TestObj(test1, test2) {
      this.test1 = test1;
      this.test2 = test2;
    }
    TestObj.prototype.test3 = 3;
    var test = new TestObj(1, 2);
    assert.equal(
      JSON.stringify(merge([test, {test4: 4}])),
      JSON.stringify({test1: 1, test2: 2, test4: 4})
    );
    //just make sure prototype is defined
    assert.equal(test.test3, 3);
  });
  it('merge with 2 objects with undefined overwrite', () => {
    assert.equal(
      JSON.stringify(merge([{test: 1, test2: 2}, {test2: undefined}])),
      JSON.stringify({test: 1})
    );
  });
});
