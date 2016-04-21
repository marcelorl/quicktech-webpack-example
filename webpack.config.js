var path               = require('path'),
    pathRewriterPlugin = require('webpack-path-rewriter'),
    webpack            = require('webpack'),
    webpackEnv         = require('webpack-env');

module.exports = {
    context: __dirname,
    devtool: 'sourcemap',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:1337/',
            'webpack/hot/dev-server',
            './app/index.js'
        ],
        vendor: [
            'angular',
            'angular-ui-router',
            'angular-ui-router.statehelper',
            'oclazyload'
        ]
    },
    module: {
        loaders: [
            {
                test: /.*\/app\/.*\.js$/,
                loaders: ['ng-annotate']
            },
            {
                test: /\.js$/,
                loader: "uglify",
                include: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.(css|scss)$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    output: {
        path: __dirname,
        publicPath: '/dist/js/',
        filename: 'app.bundle.js'
    },
    plugins: [
        new pathRewriterPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        webpackEnv
    ]
};