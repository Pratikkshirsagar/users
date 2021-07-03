const assert = require('assert');
const User = require('../src/user');

describe('validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined });
    const validationresult = user.validateSync();
    const { message } = validationresult.errors.name;

    assert(message === 'Name is required');
  });

  it('required a users name longer than 2 characters', () => {
    const user = new User({ name: 'Al' });
    const validationresult = user.validateSync();
    const { message } = validationresult.errors.name;

    assert(message === 'Name must be longer than 2 characters.');
  });
});
