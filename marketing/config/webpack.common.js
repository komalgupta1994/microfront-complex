module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // whenever any file with js or mjs extension, it should be processed by babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}