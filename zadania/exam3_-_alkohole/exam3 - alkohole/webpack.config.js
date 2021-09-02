const path = require('path');

module.exports = {
    entry: './src/app.ts',
    module: {
        rules: [{
            test: /\.ts$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'ts-loader',
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'eval-source-map',
    output: {
        publicPath: 'public',
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
};