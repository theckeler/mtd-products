const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["/src/index.js", "/src/stylesheets/main.min.css"],
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      //filename: "commercial-equipment.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/commercial-zero-turn-mowers.html",
      filename: "commercial-zero-turn-mowers.html",
    }),
    // new HtmlWebPackPlugin({
    //   template: "./src/stand-on-mowers.html",
    //   filename: "stand-on-mowers.html",
    // }),
    // new HtmlWebPackPlugin({
    //   template: "./src/hydro-walk-behind-mowers.html",
    //   filename: "hydro-walk-behind-mowers.html",
    // }),
    // new HtmlWebPackPlugin({
    //   template: "./src/surepath-commercial-zero-turn-mowers.html",
    //   filename: "surepath-commercial-zero-turn-mowers.html",
    // }),
    new MiniCssExtractPlugin({
      filename: "base.css",
    }),
  ],
};
