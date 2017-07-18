var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css',
});

module.exports = {
    entry: './app/static/scripts/app/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/static/dist'),
        publicPath: '/app/static/dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                        },
                    },
                ],
                exclude: /(node_modules)/,
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [extractPlugin],
};
