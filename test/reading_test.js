const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of database ', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'joe' });
    joe.save().then(() => done());
  });

  it('findes all users with a name of joe', () => {
    User.find({ name: 'joe' }).then((users) => {
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });
});
