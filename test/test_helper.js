const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(() => {
  mongoose.connect('mongodb://localhost/users_test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  mongoose.connection
    .once('open', () => {
      console.log('Good to go!');
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});
