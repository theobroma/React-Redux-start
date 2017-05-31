module.exports = require(process.env.NODE_ENV === 'production'
  ? './webpackConfigFiles/webpack.config.prod'
  : './webpackConfigFiles/webpack.config.dev'
);
