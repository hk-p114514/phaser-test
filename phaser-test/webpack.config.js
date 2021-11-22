const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// モジュールバンドルを行う起点となるファイルの指定
	// 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
	// 下記はオブジェクトとして指定した例
	entry: {
		bundle: './src/index.ts',
	},

	// モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { url: true },
					},
					'sass-loader',
				],
			},

			{
				// 画像ファイルをバンドルするための設定
				test: /\.(png|jpg|gif)$/i,
				generator: {
					filename: 'images/[name][ext][query]',
				},
				type: 'assets/resource',
			},
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
		extensions: ['.ts', '.js'],
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},

	output: {
		// モジュールバンドルを行った結果を出力する場所やファイル名の指定
		// "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
		path: path.join(__dirname, 'dist'),
		filename: '[name].js', // [name]はentryで記述した名前(この例ではbundle）が入る
		// assetModuleFilename: 'images/[hash][ext][query]',
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],

	devServer: {
		// webpack-dev-serverの公開フォルダ
		static: {
			directory: path.join(__dirname, 'dist'),
		},
	},
};
