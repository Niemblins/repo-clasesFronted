const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "/src/main.js",
    module: {
        rules: [
            {
                test: /\.html/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /.(css|scss)$/,
                use: [
                    "style-loader", //procesa estilos en linea
                    "css-loader", //´procesa estilos en archivos css
                    "sass-loader", //procesa estilos en archivos scss
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test:  /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new MiniCssExtractPlugin()
    ]
}