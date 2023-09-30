const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    mode: "development",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|git|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },

        ]
    },
    devServer: {
        static: "../dist",
        // contentBase: path.join(__dirname, "dist"),
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './dist/index.html'
        })
      ]
}