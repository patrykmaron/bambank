var api = "http://localhost:3000";

switch (process.env.NODE_ENV) {
  case "development":
    api = "https://bambank.herokuapp.com";

  case "production":
    api = "http://localhost:5000";
}

module.exports = {
  api,
};
