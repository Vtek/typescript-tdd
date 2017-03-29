module.exports = {
    entry: './src/flatsquares.ts',
    output: {
        filename: './dist/flatsquares.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
};