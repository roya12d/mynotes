
const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const VENDOR_LIBS = [
    'react', 'react-dom',

];

const  config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path:path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
    },
    module:{
        rules:[
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
 };
module.exports = config;




