var gulp          = require('gulp'),
    plugins       = require('gulp-load-plugins')(),
    webpack       = require('webpack'),
    webpackServer = require('webpack-dev-server'),

    webpackConfig = require('../../webpack.config.js');

gulp.task('build:App', function()
{
    new webpackServer(webpack(webpackConfig),
        {
            publicPath: webpackConfig.output.publicPath,
            hot: true,
            historyApiFallback: true,
            stats:
            {
                colors: true
            }
        })
        .listen(1337, 'localhost', function (err)
        {
            if (err)
            {
                console.log(err);
            }

            console.log('Listening at localhost:1337');
        });
});