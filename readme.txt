--start server
live-server public

--babelify watch
babel .\src\app.js --out-file=.\public\scripts\app.js -- presets=env,rect --watch

//install local
yarn add live-server babel-cli@6.24.1

//webpack
yarn add webpack@3.1.0

//validator
yarn add validator@8.0.0

//react
yarn add react@16.0.0 react-dom@16.0.0

//babel
yarn add babel-core@6.25.0 babel-loader@7.1.1

//webpack-dev-server
yarn add webpack-dev-server@2.5.1

//babel
yarn add babel-plugin-transform-class-properties@6.24.1
yarn add-babel-plugin-tranform-object-rest-spread

//react-modal
yarn add react-modal@2.2.2

//css
yarn add style-loader@0.18.2 css-loader@0.28.4

