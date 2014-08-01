'use strict';

describe('grunt check branch', function () {
    var grunt = require('grunt');

    it('should not pass with mismatched branches', function (done) {
        grunt.util.spawn({
            grunt: true,
            args: ['burrows-check_build_branch:test_fail']
        }, function(err) {
           expect(err).to.not.equal(null);
            done();
        });
    });

    it('should pass with correct branch name', function (done) {
        grunt.util.spawn({
            grunt: true,
            args: ['burrows-check_build_branch:test_success']
        }, function(err) {
            expect(err).to.equal(null);
            done();
        });
    });

});
