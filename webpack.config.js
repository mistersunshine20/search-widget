const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

const ESLintPlugin = require('eslint-webpack-plugin');
const eslintPlugin = new ESLintPlugin({})

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                },
            },
        ],
    },
    plugins: [htmlPlugin, eslintPlugin],
}
