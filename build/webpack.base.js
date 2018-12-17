'use strict';

const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		'index': path.resolve(__dirname, '../src/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
    },
    target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	node: false
};