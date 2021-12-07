### TypeScript definition files

We can use any JS libraries that we want in TS.
The issue is that TS wants to check your code. It wants to know the types of all of the functions you have, what type of arguments they take and what type of value they return. It also wants to all the different types of data flowing around the application.

Naturally the code in the JS libraries will not have the type information attached to it.
We need the code from these libraries to work with TS. To solve this
we use type definition files (tdf). This file will tell TS all the different functions that are available in the JS library, what type of arguments they take and what type of value they return.

Sometimes tdf will be installed automatically when you install a JS library, e.g axios.
