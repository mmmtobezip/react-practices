const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'assets/js/main.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    
    module: {
        rules:[{
            test: /\.(c|sa|sc)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
            type: 'asset/resource' //image처리 -> loader x -> webpack이 해줌 
        }, {
            test: /\.js/i,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]               
    },     
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        compress: true,
        hot: false
    }        
}