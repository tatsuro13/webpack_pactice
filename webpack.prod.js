const { merge }  = require("webpack-merge");
const commonConfig = require("./webpack.common");
const TerserPligin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "production",
    optimization: {
        minimizer: [
            new TerserPligin({
                extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    }
                },
            }),
            new OptimizeCssAssetsPlugin({}),
        ],
    }
});