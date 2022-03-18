const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [{
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: "./dist"
        },
        hot: true
    }
}