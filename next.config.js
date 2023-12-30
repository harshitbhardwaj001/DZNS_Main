const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  env: {
    SERVER_URL: "http://localhost:9001",
  },
  images: {
    domains: ["localhost"],
  },
});
