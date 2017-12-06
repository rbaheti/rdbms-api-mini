// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/zoodb.sqlite3',
    },
    migrations: {
      tableName: 'migrations',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'zoodb',
      user:     'rashmi',
      password: 'pass'
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
