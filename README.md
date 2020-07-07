# React-Webpack-TypeScript-Babel-SCSS

> This is sample repository demonstrates how to use React with SCSS, Webpack, TypeScript and Babel

## Starting the development server

```shell
npm start
```

## Building the `bundle`

```shell
npm run build
```

## Type-Checking the repo

```shell
npm run type-check
```

And to run in --watch mode:

```shell
npm run type-check:watch
```

## Integration with VSCode

There are 2 VSCode tasks:
1. webpack: dev server -> which start the development server using the ```npm run start``` command
2. npm: build -> which builds the app for production using the ```nmp start build``` command

There are 2 VSCode launch configurations for Chrome. Do not forget to start your chrome with the following argument ```--remote-debugging-port=9222```:
1. Debug locally -> which start the debug of the application locally by triggering the "webpack: dev server" task and then attaching to it using chrome. 
2. Debug in production -> which start the debug of the application by attaching to a chrome that has a tab with the url open. Don't forget to change the url and pathMapping to the ones suitable for your project

All credit goes to: https://github.com/a-tarasyuk/react-webpack-typescript-babel
