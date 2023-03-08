const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    //define entry point
    entry: "./src/script-1.js",

    devServer: {
        static: './dist'
      },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
      ],
    //define output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    optimization: {
        runtimeChunk: 'single',
      },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}