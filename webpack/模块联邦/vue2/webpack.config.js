const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:8082/',
	},
	devServer: {
		port: 8082,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
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
			name: 'vue2App', // 远程应用的名称
			filename: 'remoteEntry.js', // 远程入口文件
			exposes: {
				// 暴露的组件，键是其他应用引用的路径，值是组件的实际路径
				'./RemoteButton': './src/components/RemoteButton.vue',
				'./SharedStore': './src/store/index.js',
			},
			shared: {
				// 共享依赖，避免重复加载
				vue: {
					singleton: true,
				},
			},
		}),
	],
};
