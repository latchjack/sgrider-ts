import { User } from './models/User';

const user = new User({ name: 'j', age: 20 });
console.log(user.get('age')); // 20

user.set({ age: 30 });

console.log(user.get('age')); // 30
