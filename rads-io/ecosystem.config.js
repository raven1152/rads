module.exports = {
  apps : [
    {
      name      : 'rads-io',
      script    : 'index.js',
      instances : 4,
      exec_mode : 'cluster'
    }
  ]
};
