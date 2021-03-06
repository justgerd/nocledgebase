const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: 'dist/',
        hot: true
    },
    resolve: {
        alias: {
            'inferno': 'inferno/dist/index.dev.esm.js',
        },
    },
});
