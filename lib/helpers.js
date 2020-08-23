var api = "http://localhost:3000";

switch (process.env.NODE_ENV) {
  case "development":
    api = "http://localhost:3000";

  case "production":
    api = "http://localhost:3000";
}

module.exports = {
  api,
};
