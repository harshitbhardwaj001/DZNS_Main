const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    domains: ["**"],
  },
});
