var path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'reactHighlightedTextarea'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
};
