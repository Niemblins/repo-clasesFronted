const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "/src/main.js",
    module: {
        rules: [
            //Aquí definimos los loaders
            //sintaxis
            /*
            {
                test: REGEX - para una búsqueda de archivos o extensiones,
                use: Instrucciones de que hara con los archivos que le indiquemos
            }
             */
            {
                test: /\.html/, //va a buscar todos los archivos .html dentro de src
                use: [
                    {
                        loader: "html-loader",//existen una gran cantidad de loaders para diferentes casos
                        options: { minimize: true } //opcion de loader
                    }
                ]
            }, 
            //el orden de los loaders es importante
            {
                test: /.(css|scss)$/,
                use: [
                    "style-loader", //procesa estilos en linea
                    "css-loader",//procesa archivos en css
                    "sass-loader" // procesa estilos en archivos sass (SCSS)
                ]
            }
        ]
    },
    //Loader: reglas o instrcciones que nos ayudan a procesar archivos para generar nuestra salida
    //Plugins: agregan funcionalidad extra, todo plugin depende de un loader, mo pueden exidtir sin sus loaders
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html"}),
        new MiniCssExtractPlugin(),
    ]
}