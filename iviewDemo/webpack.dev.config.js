const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "development";';
    // fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
    //node.js/npm版本较高时使用以下函数
    fs.write(fd, buf, 0, 'utf-8', function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: false
        })
    ],
    devServer: { 
        host: '127.0.0.1',
        // 修改启动端口号   也可以在npm dev启动参数中修改
        port: 9001,
        // 代理  在开发模式中可以使用Eurake代理，因为没有跨域，所以可以正常使用，生产环境需要换成nginx或者Zuul代理
        proxy: {
            '/api': {
                target: 'http://localhost:8888/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/api' : '/'},
            },
            '/api2': {
                target: 'http://localhost:8889/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/api2' : '/'},
            }
        }
    }
});