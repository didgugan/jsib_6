var NwBuilder = require('nw-builder'),
    gulp = require('gulp'),
    gutil = require('gulp-util');
 
gulp.task('nw', function () {
    var nw = new NwBuilder({
        version: '0.11.6',
        files: [ './*'],
        platforms: ['osx','win']
    });

    nw.on('log', function (msg) {
        gutil.log('nw-builder', msg);
    });

    return nw.build().catch(function (err) {
        gutil.log('nw-builder', err);
    });
});