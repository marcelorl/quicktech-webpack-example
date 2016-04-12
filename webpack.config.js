var pathRewriterPlugin = require('webpack-path-rewriter'),
    webpack            = require('webpack');

module.exports = {
    app: {
        context: __dirname,
        devtool: 'sourcemap',
        entry: {
            app: ['./app/index.js']
        },
        module: {
            loaders: [
                {
                    test: /.*\/app\/.*\.js$/,
                    loaders: ['ng-annotate']
                },
                {
                    test: /.*\/app\/.*\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    //IMAGE LOADER
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader:'url?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
                },
                {
                    test: /.*\/app\/.*\.html$/,
                    //loader: 'ng-cache?prefix=[dir]/[dir]'
                    loader: 'html-loader'
                }
            ]
        },
        output: {
            path: './dist',
            publicPath: "./dist/",
            filename: 'app-[chunkhash].bundle.js'
        },
        plugins: [
            new pathRewriterPlugin()
        ]
    },
    vendor: {
        context: __dirname + '/dist',
        entry: {
            app: [
                'angular',
                'angular-ui-router',
                'angular-ui-router.statehelper',
                'oclazyload'
            ]
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['uglify']
                }
            ]
        },
        'uglify-loader': {
            mangle: false
        },
        output: {
            path: './dist',
            filename: 'vendor.bundle.js'
        }
    }
};