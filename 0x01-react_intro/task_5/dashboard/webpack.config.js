const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, "dist"),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack & React',
            template: './dist/index.html',
            inject: 'body',
            favicon: './dist/holberton-favi.ico'
        })
    ]
}