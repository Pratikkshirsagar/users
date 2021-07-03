const assert = require('assert');
const User = require('../src/user');

describe('Update record', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => done());
  });

  it('instance typeusing set n save', () => {
    joe.set('name', 'Alex');
    joe
      .save()
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  });
});
