const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'src/index.html',
            title: 'Title',
            yandexMetrika: true,
        }),
    ],
    optimization: {
        minimizer: [ new TerserPlugin({
            sourceMap: true,
            terserOptions: {
                compress: {
                    pure_funcs: ['console.log'],
                },
            }
        })]
    },
};
