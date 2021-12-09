# Sorting Algorithm - TS

## Configuring the TypeScript Compiler..

To keep things neat, we want to organise all of our files. We want the TS files to go into the src folder and we want our compiled code to go into the build folder.

We're only going to edit the code in the src file and leave the build folder's files untouched.

We are going to configure our ts compiler to work with these directories.
To do this we need to generate a tsconfig.json file. This file is a TypeScript compiler configuration file, that we can use to customise how the compiler behaves.
To generate the file we run

```bash
$ tsc --init
```

The tsconfig file is full of options that we can use to customise the compiler.
Any time that we run the tsc compiler it will automatically look for a tsconfig file.

We are going to edit the outDir and rootDir options.

- rootDir - where we are going to hold all of our source code
- outDir - where we are going to place all of

This is how we tell the tsc compiler where our files will/should be placed.

```json
"rootDir": "./src"
"outDir": "./build"
```

We can then run our outputted JS files by typing ... into the terminal.

```bash
$ node build/index.js
```

However to save us from having to run this every time we can configure and use a package.json file.

Initialise the package.json by running the following in the terminal.

```bash
$ npm init -y
```

and then install the following packages...

```bash
$ npm install nodemon concurrently
```

Nodemon - allow us to rerun node anytime a file changes inside our project (executes the code once it has been compiled).

Concurrently - helps us to run multiple scripts at the same time. In this case..

1. Run a script to start up the tsc compiler.
2. Use nodemon to execute the code.

Once installed the newly added packages will be listed in the package.json file.

We now want to add in some scripts to configure this process...

```json
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
}
```

Starts up the tsc in watch mode

```json
"start:build": "tsc -w"
```

Runs the compiled code

```json
"start:run": "nodemon build/index.js"
```

Runs both start:build and start:run at the same time

_(Looks at every script beginning with 'npm:start:' and runs it)_

```json
"start": "concurrently npm:start:*" =
```

We then just need to run this via the command

```bash
$ npm start
```
