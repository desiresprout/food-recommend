const path = require("path");
const isDevelopment = process.env.NODE_ENV !== "production";
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  name: "food-recommend",
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "hidden-source-map" : "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
    alias: {
      "@components": srcPath("components"),
      "@lib": srcPath("lib"),
      "@typing": srcPath("typing"),
      "@sagas": srcPath("sagas"),
      "@reducers": srcPath("reducers"),
      "@asset": srcPath("asset"),
      "@lib": srcPath("lib"),
      "@pages": srcPath("pages"),
    },
  },
  entry: {
    app: srcPath("index"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: isDevelopment,
              },
            ],
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        exclude: path.join(__dirname, "node_modules"),
        loader: "file-loader",
        options: {
          // outputPath: "./src/asset",
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
};
