const path = require('path');
const EslintPlugin = require('eslint-webpack-plugin');
const options = {};

module.exports = {
    entry: './src/app/app.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new EslintPlugin(option)],
};
