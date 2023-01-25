module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ces4tt4gqg4dp7or25sg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_7c85'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '84DVD03CpRGXkrNyQE5bOjiL8sFpyb18'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
