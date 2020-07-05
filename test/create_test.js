const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('Saves a user', (done) => {
    const joe = new User({ name: 'Joe1' });
    joe.save().then(() => {
      assert(!joe.isNew);
      done();
    });
  });
});
