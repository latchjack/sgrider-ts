import { User } from './models/User';

const user = new User({ name: 'name', age: 30 });

user.on('change', () => {
  console.log('Change 1');
});
user.on('change', () => {
  console.log('Change 2');
});
user.on('click', () => {
  console.log('Click 1');
});

user.trigger('change');
user.trigger('click');
