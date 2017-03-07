const { resolve } = require('path');
const path=require('path');
const webpack = require('webpack');

module.exports = {
entry: {
	       //	'react-hot-loader/patch',
       bundle:'./src/js/app.js',
       vendor:['vue','vuex','vue-router']
       },
output: {
	path: path.join(__dirname, './dist'),
	filename: './js/bundle.js',
//	chunkFilename: '[name].[chunkhash:5].chunk.js',
	},
module: {
rules: [
	{
	test: /\.scss$/,
	use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "sass-loader",// compiles Sass to CSS 
		options: {
			includePaths: ['./src/css']
		}
            }]
	},

       {
test: /\.js$/,
       use: [
	       'babel-loader',
       ],
       exclude: /node_modules/
       },
       {
test: /\.css$/,
       use: [
	'style-loader',
       'css-loader?modules',
       'postcss-loader',
       ],
       },
       ],
	},

plugins: [
		 //定义环境
	//new webpack.DefinePlugin({
	//			 'process.env': {
	//			 'NODE_ENV': '"production"'
	//			 }
	//			 }),
		//压缩
        //new webpack.optimize.UglifyJsPlugin({
	//	compress: {
	//	warnings: false
	//},
	//	sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
	//	mangle: true
	//}),
       new webpack.optimize.CommonsChunkPlugin({name:'vendor',  filename:'./js/vendor.js'}),
       new webpack.NamedModulesPlugin(),
       //         // prints more readable module names in the browser console on HMR updates
       ],
       }
