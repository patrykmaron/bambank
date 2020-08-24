var api = "http://localhost:3000";

switch (process.env.NODE_ENV) {
  case "development":
    api = "http://localhost:3000";

  case "production":
    api = "https://bambank.herokuapp.com";
}

module.exports = {
  api,
};
