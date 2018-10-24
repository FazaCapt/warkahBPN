module.exports = {
    entry: './public/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        root: __dirname,
        alias: {
            Greeter: 'public/components/Greeter',
            GreeterForm: 'public/components/GreeterForm',
            GreeterMessage: 'public/components/GreeterMessage'
        },
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
}

