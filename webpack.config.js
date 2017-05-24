let HtmlWebpackPlugin = require('html-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.(jpg|png|gif)$/, loader: 'url-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
};