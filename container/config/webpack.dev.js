const { merge } = require('webpack-merge'); // use to merge two different webpack config objects
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pakageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'conatiner',
            remotes: {
                marketingApp: 'marketing@http://localhost:8081/marketingEntry.js',
                authApp: 'auth@http://localhost:8082/authEntry.js',
                dashboardApp: 'dashboard@http://localhost:8083/dashboardEntry.js'
            },
            shared: pakageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig);