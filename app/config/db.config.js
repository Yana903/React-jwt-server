module.exports = {
    HOST: "localhost",
    USER: "yana2",
    PASSWORD: "12345",
    DB: "authdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };