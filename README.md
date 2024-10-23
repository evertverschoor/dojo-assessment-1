# Dojo assessment #1
This is a simple tic tac toe implementation developed using TDD. 

The tech stack is simple ECMAScript 6 in the browser without any transpiling going on. The application can be run by starting a web server in this root directory, simply opening the `index.html` will give you CORS errors because of ES module imports. Running `npm install` and then `npm start` will install the npm package `http-server` and run that.

The entry point of the application is `main.mjs`. Tests run on `vitest` because of its speed and support for native ES modules.

### TDD
Besides the initial commit, [the first revision](https://github.com/evertverschoor/dojo-assessment-1/commit/cee63cf9ee46010229169f2d94abc990ae302278), only contains general setup, the interfaces for all components and test specs for those components. All test at this stage fail in one way or another because of the error `Not yet implemented` being thrown.

The second revision...
