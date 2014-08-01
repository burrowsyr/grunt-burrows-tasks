'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('burrows-check_build_branch', function () {
        var done = this.async(),
            options = this.options(),
            branchName = options.branchName;

        grunt.util.spawn({
            cmd: 'git',
            args: [
                'symbolic-ref',
                '--short',
                'HEAD'
            ]
        }, function (err, results) {
            if(err) {
                grunt.fail.warn(err);
            }

            if(results.stdout !== branchName) {
                grunt.fail.warn('Please only build using ' + branchName + ' branch');
            }

            done();
        });
    });
};