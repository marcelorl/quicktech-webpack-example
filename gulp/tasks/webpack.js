var del = require('del'),
    gulp          = require('gulp'),
    plugins       = require('gulp-load-plugins')(),
    webpack       = require('webpack'),

    webpackConfig = require('../../webpack.config.js');

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

gulp.task('clean:Dist', function ()
{
    return del([
        '../../dist/js/*.js',
        '!../../dist/js/vendor*'
    ]);
});

gulp.task('build:Index', ['build:App'], function ()
{
    console.log('DIRNAME', __dirname);
    var target = gulp.src('./app/index.html');
    var sources = gulp.src([
        './dist/js/vendor*.js',
        './dist/js/app*.bundle.js'], {read: false});

    return target.pipe(plugins.inject(sources))
        .pipe(gulp.dest('./.'));
});