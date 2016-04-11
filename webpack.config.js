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
                }
            ]
        },
        output: {
            path: './dist/js',
            publicPath: "./dist/js/",
            filename: 'app-[chunkhash].bundle.js'
        },
        plugins: [
            new pathRewriterPlugin()
        ]
    },
    vendor: {
        context: __dirname + '/dist/js',
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
            path: './dist/js',
            filename: 'vendor.bundle.js'
        }
    }
};