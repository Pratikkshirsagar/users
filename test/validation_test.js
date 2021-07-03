const assert = require('assert');
const User = require('../src/user');

describe('validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined });
    const validationresult = user.validateSync();
    const { message } = validationresult.errors.name;

    assert(message === 'Name is required');
  });
});
