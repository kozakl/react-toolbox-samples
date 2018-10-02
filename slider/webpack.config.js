const DefinePlugin       = require('webpack').DefinePlugin,
      RestOptimizePlugin = require('rest-optimize-webpack-plugin');

module.exports = {
    entry: './src/Main.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                use: ['url-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]__[hash:base64:10]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'public/',
        historyApiFallback: true,
        open: 'google-chrome-beta'
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'API_URL': JSON.stringify('')
            }
        }),
        new RestOptimizePlugin()
    ]
};
