var path = require('path');

var config = {
    entry: './src/index.js',
    /*
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    */
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    configFile: "./.eslintrc",
                },
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader'
            },
            {
                test: /\.scss$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader?name=[name].[hash].[ext]'
            },
        ]
    },
};

module.exports = config;