const withTM = require("next-transpile-modules")(["gsap"]);

const isProduction = process.env.NODE_ENV === "production";

module.exports = withTM({
  // env: {
  //   SERVER_URL: isProduction
  //     ? "https://your-production-server-url"
  //     : "http://localhost:9001",
  // },
  images: {
    domains: isProduction ? ["**"] : ["localhost"],
  },
});
