const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = require('./paths');

module.exports = {
	// モジュールバンドルを行う起点となるファイルの指定
	// 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
	// 下記はオブジェクトとして指定した例
	entry: [paths.src + '/index.ts'],

	output: {
		path: paths.dist,
		filename: '[name].js',
		publicPath: '/',
	},

	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.public,
					to: 'assets',
					globalOptions: {
						ignore: ['*.DS_Store'],
					},
					noErrorOnMissing: true,
				},
			],
		}),
	],

	// モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
	module: {
		rules: [
			{
				test: /\.(sass|scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: false,
							modules: false,
						},
					},
					'sass-loader',
				],
			},

			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

			{
				// 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					// sourceMapを有効にする
					// sourceMapを有効にしないと、コンパイル後のjsファイルのソースマップが出力されない
					compilerOptions: {
						sourceMap: true,
					},
				},
			},
		],
	},

	// モジュールとして扱いたいファイルの拡張子を指定する
	// 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
	// デフォルトは['.js', '.json']
	resolve: {
		modules: [paths.src, 'node_modules'],
		extensions: ['.ts', '.js', '.json', 'jsx', 'tsx'],
		alias: {
			'@': paths.src,
			assets: paths.public,
		},
	},
};
