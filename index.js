var path = require('path');
var webpackConfigModule = require('nwb/lib/createWebpackConfig');
var createBuildConfig = require('nwb/lib/appCommands').createBuildConfig;
var createWebpackConfig = webpackConfigModule.default;
var reactConfig = require('nwb/lib/react');
var nwbConfig = require(process.cwd() + '/nwb.config.js');

module.exports = function createNwbWebpackConfig() {
  var args = {_: ['build-'+nwbConfig.type]};

  return createWebpackConfig(
      createBuildConfig(args, reactConfig(args).getBuildConfig(args)), {}, Object.assign({
        babel: {},
        devServer: {},
        karma: {},
        npm: {},
        webpack: {},
        path: path.resolve('nwb.config.js'),
      }, nwbConfig)
  );
};