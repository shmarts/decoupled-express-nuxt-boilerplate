## Getting Started

Install dependencies:
```
$ yarn // npm install
```

Then you can run the web app and the API in development mode (watching for changes) with:
```
$ yarn start // npm start
```

### client and server folders

Each folder has its own scripts you can run individually if you only want to work with one part of the app

## npm scripts

### npm install
`npm install` // `yarn` will install the root folder (development) dependencies, and after that do the same with `web` dependencies and `api` dependencies.

### npm start
`npm start` // `yarn start` will run both subfolders' `npm start` in parallel using [`npm-run-all`](https://github.com/mysticatea/npm-run-all)

### npm run build
`npm run build` will run both subfolders' `npm run build` in parallel.
