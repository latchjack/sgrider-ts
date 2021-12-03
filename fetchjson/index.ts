import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

/* 
| An interface is used to describe a structure of an object.
| We're saying inside our app theres going to be an object 
| named 'Todo', and it's going to have the three properties
| named id, title and completed. Their keys will have the
| types of defined in the interface
*/
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  // Now we tell TS that res.data is going to be a Todo
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// We need to tell TS what type we are expecting for each arg
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with the ID: ${id}
    Has a title of: ${title}
    Is it completed?: ${completed}
  `);
};
