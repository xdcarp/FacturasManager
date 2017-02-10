var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var extractCSS = new ExtractTextPlugin('vendor.css');
var isDevBuild = process.argv.indexOf('--env.prod') < 0;

module.exports = {
    resolve: {
        extensions: ['.js', '.scss']
    },
    module: {
        rules: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            //{ test: /\.scss$/i, loaders: extractCSS.extract(['css-loader?minimize', 'sass-loader']) },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    entry: {
        polyfills: ["./src/polyfills.ts"],
        vendor: ["./src/vendor.ts"]
    },
    output: {
        path: path.join(__dirname, '../wwwroot', 'js'),
        filename: '[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        //extractCSS,
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new webpack.DllPlugin({
            path: path.join(__dirname, '../wwwroot', 'js', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ].concat(isDevBuild ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false
        })
    ])
};