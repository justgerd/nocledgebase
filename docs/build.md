# Building

Building the application is done with webpack.

## Dependencies
- [node](https://nodejs.org/en/)
  - node.js can be installed on BKU machines using the "Windows Binary (.zip)" download from https://nodejs.org/en/download/current/
- [yarn](https://yarnpkg.com/)
  - yarn can be installed with the node installation by running `npm install -g yarn`

## Fetching nodejs dependencies using yarn
Running `yarn` with no arguments should install all the dependencies.

## Development
During development, the application can be started using `yarn dev`. This should open a browser window with the application, which will hot-reload whenever changes are made. If the browser doesn't open automatically, you should navigate to http://localhost:8080/

## Production
A production build can be completed using `yarn build`. This will create an index.html as well as a main.[hash].js in `dist/`. The whole folder can now be distributed to end users, or be statically served.
