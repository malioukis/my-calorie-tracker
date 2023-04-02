# my-calorie-tracker

## Packages Backend:

Dependencies:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [TODO] [winston]()
  - is a logger for just about everything. It includes support for multiple storage options and log levels, log queries,
    and even a built-in profiler.
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can
    help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various
    options.

- [MongoDb](https://www.npmjs.com/package/mongodb)
  - The official MongoDB driver for Node.js.
-[Winston]logger
DevDependencies:

- [typescript](https://www.npmjs.com/package/typescript)
  - TypeScript is a language for application-scale JavaScript.
- [ts-node](https://www.npmjs.com/package/ts-node)
  - TypeScript execution and REPL for node.js, with source map and native ESM support.
- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application
    when file changes in the directory are detected.

- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. -

- [typescript-eslint](https://typescript-eslint.io/)
  - Tooling which enables ESLint to support TypeScript.

# Folder Structure

- Route configuration to define the requests our API can handle

- Services for tasks such as connecting to our database models, doing queries, or connecting to external services that
  are required by the specific request

- Middleware for running specific request validations before the final controller of a route handles its specifics

- Models for defining data models matching a given database schema, to facilitate data storage and retrieval

- Controllers for separating the route configuration from the code that finally (after any middleware) processes a route
  request, calls the above service functions if necessary, and gives a response to the client

## Packages Frontend:

- [primeng](https://primeng.org/)
- [prime icons](https://primeng.org/)
- [TODO] [primeflex?](https://primeng.org/)


