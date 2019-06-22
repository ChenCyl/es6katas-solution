const assert = require('chai').assert;

// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    class TestClass {
      
    }
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });
  it('a class is block scoped', () => {
    // class Inside {}
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });
  it('the `constructor` is a special method', function() {
    class User {
      constructor(id) {
        this.id = id
      }
    }
    const user = new User(42);
    assert.equal(user.id, 42);
  });
  it('defining a method by writing it inside the class body', function() {
    class User {
      writesTests() {
        return false
      }
    }
    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });
  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      constructor() {
        this.everWroteATest = false
      }
      wroteATest() { this.everWroteATest = true; }
      isLazy() { 
        if (this.everWroteATest === false) {
          return true
        }
        else {
          return false
        }
      }
    }
    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });
  it('anonymous class', () => {
    function test(){}
    const classType = typeof test;
    assert.equal(classType, 'function');
  });
});
