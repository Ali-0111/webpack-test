const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //define entry point
    entry: "./src/script-1.js",

    devServer: {
        static: './dist'
      },

    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: './src/index.html'
        }),
      ],
    //define output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
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