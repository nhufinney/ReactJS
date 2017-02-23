var webpack = require("webpack");

module.exports = {
    entry: "./Lesson_01./02_05/start/src/index.js",
    output: {
        path: "./Lesson_01./02_05/start/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query: {
                    presets: ["latest", "stage-0", "react"]
                }
            }
        ]
    }
};