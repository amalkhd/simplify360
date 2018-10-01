var gulp = require('gulp');
var shell = require('gulp-shell');
var gutil = require('gulp-util');
var merge = require('merge-stream');
var symlink = require('gulp-sym');
var wiredep = require('wiredep').stream;
var chalk = require('chalk');
//for css
gulp.task('bower-css', function () {
    gulp.src('./layout/header.php')
        .pipe(wiredep({
            ignorePath: '../',
            onFileUpdated: function(filePath){
                console.log(chalk.red.bold("Updated: ") + chalk.black(filePath));
            },
            onPathInjected: function (filePath) {
                console.log(chalk.red.bold("Injected: ") + chalk.red(filePath.path));
            },
            fileTypes: {
                php: {
                    replace: {
                        css:function(filePath){
                            return '<link rel="stylesheet" href="'+filePath+'"/>';
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('./layout'));
});
//for js
gulp.task('bower-js', function () {
    gulp.src('./layout/footer.php')
        .pipe(wiredep({
            ignorePath: '../',
            onFileUpdated: function(filePath){
                console.log(chalk.red.bold("Updated: ") + chalk.black(filePath));
            },
            onPathInjected: function (filePath) {
                console.log(chalk.red.bold("Injected: ") + chalk.red(filePath.path));
            },
            fileTypes: {
                php: {
                    replace: {
                        js:function(filePath){
                            return  '<script src="'+filePath+'"></script>';
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('./layout'));
});
gulp.task('bower', ['bower-css','bower-js'],function(){
});
