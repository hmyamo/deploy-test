module.exports = {
  apps: [{
    name: 'vue-componented',
    script: './server.js',
    watch: true,
    instance2: 2,
    exec_mode: 'cluster',
    env: {
      COMMON_VARIABLE: 'true',
      PORT: 3000
    },
    env_development: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
