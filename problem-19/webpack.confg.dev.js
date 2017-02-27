var path = require('path');

module.exports = {
    context: path.resolve(__dirname, "app"),
    entry: "./index",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    resolve: {
        modules: [
          "node_modules",
          path.resolve(__dirname, "app")
        ],
        extensions: [".js"],
    },
    devtool: "source-map",    
    target: "node",
    module: {
        rules: [            
            {
                test: /\.js?$/,
                include: [
                  path.resolve(__dirname, "app")
                ],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
}