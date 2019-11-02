const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve('dist'),
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'World Clock',
            template: path.resolve('src/index.html')
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
        contentBase: './dist',
        publicPath: '/'
    }
}