'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: {
        src: [
            'tasks/**/*.js',
            'test/**/*.js'
        ]
    }
};
