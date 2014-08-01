'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: {
        src: [
            'public/scripts/**/*.js',
            '!public/scripts/vendor/**/*.js'
        ]
    }
};
