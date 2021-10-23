const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/", "/event", "/rsvp", "/story", "/zoom"],
        }),
      ],
    };
  },
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
};
