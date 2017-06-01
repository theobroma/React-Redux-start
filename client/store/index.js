
module.exports = require(PRODUCTION
  ? './configureStore.prod'
  : './configureStore.dev'
);
