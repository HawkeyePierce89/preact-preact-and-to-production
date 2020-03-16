const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.js',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            title: 'Title',
            template: 'src/index.html',
        }),
    ],
};
