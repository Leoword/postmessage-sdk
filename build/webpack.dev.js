const webpackBase = require('./webpack.base');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = Object.assign(webpackBase, {
    devtool: 'inline-source-map',
    devServer: {
        port: 8003,
        host: 'localhost'
    }
});
devConfig.mode = 'development';

devConfig.plugins = [
    new HtmlWebpackPlugin({
		filename: 'index.html',
		template: path.resolve(__dirname, './template/index.html'),
		inject: "head"
	})
];

module.exports = devConfig;