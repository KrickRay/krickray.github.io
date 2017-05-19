const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'app': [
            'babel-polyfill',
            './src/index'
        ]
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
