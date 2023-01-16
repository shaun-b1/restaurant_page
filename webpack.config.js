const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                generator: {
                    filename: 'images/[hash][ext]'
                },
                type: 'asset/resource',
            },
            {
                test: /\.tff$/i,
                generator: {
                    filename: 'fonts/[hash][ext]'
                },
                type: 'asset/resource',
            },
        ],
    },
    performance: {
        hints: false,
    },
};