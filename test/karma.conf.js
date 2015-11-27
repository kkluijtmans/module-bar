module.exports = function (config) {
	config.set({

		logLevel: config.LOG_DEBUG,

		basePath: '../',

		plugins: [
			'karma-jasmine',
			'karma-systemjs',
			'karma-chrome-launcher',
			'karma-spec-reporter',
			'karma-coverage'
		],

		frameworks: ['systemjs', 'jasmine'],

		files: [
			'lib/*.js',
			'js/*spec.js'
		],

		systemjs: {
			// Path to your SystemJS configuration file
			configFile: 'js/systemConfig.js',

			// Patterns for files that you want Karma to make available, but not loaded until a module requests them.
			// eg. Third-party libraries.
			serveFiles: [
				'lib/*.js',
				'js/*.js'
			],

			testFileSuffix: 'spec.js'
		},

		reporters: ['spec', 'coverage'],

		preprocessors: {
			// source files, that you wanna generate coverage for - do not include tests or libraries
			// (these files will be instrumented by Istanbul)

			//'lib/!(*.spec).js': ['coverage'], // Correctly resolves a default import from an es6 module. but not the precompiled es6->es5 module
			'js/!(*.spec).js': ['coverage'] // Tests fail, but should be the only option used here
			//'js/module-bar.js': ['coverage'] // Tests pass!
		},

		coverageReporter: {
			instrumenters: { isparta : require('isparta') },
			instrumenter: {
				'**/*.js': 'isparta'
			},
			reporters: [
				{
					type: 'text-summary'
				}
			]
		},

		browsers: ['Chrome'],

		browserNoActivityTimeout: 50000
	});
};
