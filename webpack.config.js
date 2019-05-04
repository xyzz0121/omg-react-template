const webpack = require('webpack');
const path = require('path');
const paths =  require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const theme = require('./package.json').theme;
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
//ts antd 按需加载
const tsImportPluginFactory = require('ts-import-plugin')
const publicPath = '/';

//Uglify原意变丑 压缩js
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),//开发服务运行时的文件根目录
		host: '127.0.0.1',//主机地址
		port: 3000,//端口号
		overlay: true,
		compress: true,//开发服务器是否启动gzip等压缩
		disableHostCheck: true,
		historyApiFallback: true //suppot browserrouter
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				test: /\.js|jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					plugins: ['syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],
				},
			},
			{ 
				test: /\.ts[x]?$/, 
				loader: "awesome-typescript-loader",
				options: {},
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								autoprefixer({
									browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
								}),
								{{#if isInMobile}} pxtorem({ rootValue: 75, propWhiteList: [] }) {{/if}
							],
						}
					},
					'sass-loader',

				]
			},
			{
				test: /\.(jpg|png|gif|jpeg)$/,
				use: [{
					loader:'url-loader',
					options:{
						limit: 100000, //小于10kb的这样用
						name: 'assets/images/[hash:8].[name].[ext]'
					}
				}]
			}
		]
	},
	entry: {
		index: paths.appIndexJs
	},
	output: {
		filename: '[name].js',
		publicPath: publicPath,
		path: path.resolve(__dirname, 'build')
	},
	resolve: {
		//配置自解析拓展名(import的时候不用写拓展名)
		extensions: ['.jsx', '.js', '.json', '.ts', '.tsx']
	},
	//模式： TODO:了解
	mode: 'development',
	//最优组合 TODO:了解
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},
			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.appHtml,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new optimizeCss(),
	]
};
