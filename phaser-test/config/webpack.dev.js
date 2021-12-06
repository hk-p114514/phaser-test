// webpack config file for development
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',

	devServer: {
		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},

	module: {
		rules: [
			{
				test: /\.(sass|scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, modules: false }
					},
				]
			}
		]
	}
})