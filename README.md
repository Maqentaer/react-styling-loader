# [react-styling](https://github.com/halt-hammerzeit/react-styling) loader module for webpack

## Usage

`var styles = require('react-styling!file.css');`

## Usage with other style loaders.

`var styles = require('react-styling!less!file.less');`

or

`var styles = require('react-styling!sass!file.sass');`

or

`var styles = require('react-styling!stylus!file.styl');`

#### for using with [css-loader](https://github.com/webpack/css-loader)

`var styles = require('react-styling/css!css!file.css');`

#### for parsing in runtime or working with not executable pitching loaders

`var styles = require('react-styling/load!raw!file.css');`

## Install

`npm install react-styling-loader`

## Contributors

 - Maqentaer

## License

[MIT](LICENSE)
