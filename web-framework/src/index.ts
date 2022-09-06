import { User } from './models/User';

const user = new User({ name: 'j', age: 20 });
console.log(user.get('age'));
