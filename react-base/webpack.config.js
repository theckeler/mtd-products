const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["/src/index.js", "/src/stylesheets/index.css"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "base.js",
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    hot: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "base.css",
    }),
  ],
};
