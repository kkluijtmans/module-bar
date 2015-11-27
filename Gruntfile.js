(function a() {
	'use strict';

	module.exports = function(grunt) {
		// define settings
		var settings = {
			dir: {
				src: 'js',
				dist: 'dist/',
				doc: 'doc/',
				test: 'test/',
				temp: 'temp',
				coverage: 'temp/coverage/'
			},

			applicationName: 'module-bar'
		};

		//autoload all grunt plugins mentioned in devDependencies package.json
		require('load-grunt-tasks')(grunt);

		grunt.config.init(settings);

		// load task configurations
		var configs = require('load-grunt-configs')(grunt, {
			config: {
				src: 'grunt-tasks/configs/*.js'
			}
		});

		grunt.config.merge(configs);

		// load task definitions
		grunt.loadTasks('grunt-tasks');

		// Time how long tasks take. Can help when optimizing build times
		require('time-grunt')(grunt);
	};
}());
