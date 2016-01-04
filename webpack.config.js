var webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    entry: {
        app: './src/bootstrap'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                },
                exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    }
};