var gulp          = require('gulp'),
    plugins       = require('gulp-load-plugins')(),
    webpack       = require('webpack'),

    path          = require('../paths.js'),

    webpackConfig = require(path.to.root + '/webpack.config.js');

gulp.task('build:App', ['clean:Dist'], function(done)
{
    webpack(webpackConfig.app).run(function(err)
    {
        if(err)
        {
            console.log('Error', err);
        }
        done();
    });
});

gulp.task('build:Vendor', function(done)
{
    webpack(webpackConfig.vendor).run(done);
});