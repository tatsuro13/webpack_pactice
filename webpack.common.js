const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: "./src/js/app.js",
        another: "./src/js/another.js"
    },
    output:{
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].[hash].bundle.js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: true,
                },
              },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader","sass-loader"],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "another.html",
            template: "./src/html/another.html",
            chunks: ["another"],
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].[contenthash].css"
        })
    ],
}