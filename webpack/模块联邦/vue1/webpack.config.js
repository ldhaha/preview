const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:8081/',
	},
	devServer: {
		port: 8081,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederationPlugin({
			name: 'vue1App', // 宿主应用的名称
			remotes: {
				// 远程应用的引用配置
				// 键是我们在代码中引用远程应用的别名
				// 值是远程应用的名称@远程应用的入口文件URL
				vue2App: 'vue2App@http://localhost:8082/remoteEntry.js',
			},
			shared: {
				// 共享依赖，与远程应用保持版本一致
				vue: {
					singleton: true,
				},
			},
		}),
	],
};
