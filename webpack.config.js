var pathRewriterPlugin = require('webpack-path-rewriter'),
    webpack            = require('webpack'),

    path = require('./gulp/paths.js');

module.exports = {
    app: {
        context: path.to.root,
        devtool: 'sourcemap',
        entry: {
            app: ['./app/app.js']
        },
        module: {
            loaders: [
                {
                    test: /.*\/app\/.*\.js$/,
                    loaders: ['ng-annotate']
                }/*,
                 {
                 // I want to uglify with mangling only app files, not thirdparty libs
                 test: /.*\/app\/.*\.js$/,
                 exclude: /.spec.js/, // excluding .spec files
                 loader: "uglify"
                 }*/
            ]
        },
        output: {
            path: path.to.root + '/dist/js',
            publicPath: "/dist/js/",
            filename: 'app-[chunkhash].bundle.js'
        },
        plugins: [
            new pathRewriterPlugin()
        ]
    },
    vendor: {
        context: path.to.root + '/dist/js',
        entry: {
            app: [
                'angular',
                'angular-ui-bootstrap',
                'ngstorage',
                'angular-sanitize',
                'angular-mocks',
                'lodash',
                'angular-translate',
                'angular-translate-loader-partial',
                'angular-ui-router',
                'angular-ui-router.statehelper',
                'angular-animate',
                'angular-ui-bootstrap',
                'restangular',
                'angular-ui-tree',
                'ng-file-upload',
                'angular-input-masks',
                'angular-slugify',
                'angular-scroll',
                'angular-loading-bar',
                'angular-utils-pagination',
                'angular-toggle-switch',
                'angular-busy',
                'angular-froala',
                'angular-youtube-embed',
                'oclazyload',
                'angular-elastic-input/src/angular-elastic-input.js'
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
            path: path.to.root + '/dist/js',
            filename: 'temp.vendor.bundle.js'
        }
    }
};