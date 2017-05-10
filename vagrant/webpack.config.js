var webpack = require('webpack');
var path = require('path');

module.exports = {
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    entry: './app/static/scripts/app/app.jsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'app/static/dist')
    }
};