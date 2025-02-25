const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
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
    devServer: {
        static: path.join(__dirname, 'dist'),
        hot: true
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: ['**/*', '!*.ico']
        // }),
        new HtmlWebpackPlugin({
            title: 'Testing',
            template: './src/index.html',
            inject: 'body',
            favicon: './dist/holberton-favi.ico'
        })
    ]

}