## [EAT IT.](https://eat-it-app.herokuapp.com)

### Overview:
EAT IT lets users quickly find restaurant recommendations from people they know and trust. Log-in, follow friends, see their recommendations, and add your own!

### Tech used:
- JavaScript (ES2015+)
- Express.js
- Pug (the templating engine formerly known as Jade)
- SASS
- Webpack
- Mocha
- PostgreSQL

### Approach:
Initial planning consisted of creating [design drawings](https://goo.gl/photos/CML3y1qNQVQsmMVEA) and user stories (see the 'docs' folder in this repo). Facebook's SDK is used to handle login, and Graph API calls allow users to quickly find friends who also use the app. Restaurant info is pulled from Zomato's API.

As a fairly simple app I decided to keep the backend light weight. A Node.js server (using Express) and PostgreSQL database (accessed through the PG package).

The SPA frontend does not use any frameworks, but takes inspiration from React's components. Each 'component' consists of a Pug template, SCSS file, and a javascript file to handle logic and render the template.

A long time (too long) was spent configuring Webpack to bundle everything. I've made use of Babel with environment presets to target whatever browsers are required. This transpiling includes polyfills where necessary (include Fetch, so ajax requests can be made with promises in all browsers). Loaders are also used for SCSS and Pug template compilition, and HMR has been set up to make development easier, but I kind of broke it the other day and now it only hot loads the css and not the modules. TBC...

### Issues/TODOs:
Too many to list. Big ones are setting up a separate production config for Webpack so I can .gitignore compiled files, and actually making use of Mocha rather than just giving lip service to testing. I'd also like to play around with Travis CI so I can get one of those cool 'build: passing' icons at the top of this readme. Much work to be done on this app.
