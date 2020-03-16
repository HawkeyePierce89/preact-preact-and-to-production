const path = require('path');

const settings = {
    development: require('./webpack.development'),
    production: require('./webpack.production'),
};

module.exports = (env, config) => {
    config = config || {mode : 'development'};

    return {
        mode: config,
        entry: path.join(__dirname, './src/index.js'),
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }, {
                test: /\.less/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader',
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader!postcss-loader',
            }],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            modules: [
                path.resolve('./node_modules'),
            ],
            alias: {
                "react": "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
                "~actions": path.resolve(__dirname, 'src/actions/'),
                "~components": path.resolve(__dirname, 'src/components/'),
                "~constants": path.resolve(__dirname, 'src/constants/'),
                "~helpers": path.resolve(__dirname, 'src/helpers/'),
            },
        },
        ...settings[config.mode],
    }
};