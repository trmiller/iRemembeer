modle.exports = function(config){
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'requirejs'],
		files: [
			{ pattern: 'lib/**/*.js', included: false },
			{ pattern: 'app/**/**/*.js', included: false },
			{ pattern: 'test/**/*Tests.js', included: false },
			'require-config.js',
			'test/test-main.js'
		],

		exclude: [
			'src/js/main.js'
		],

		reporters: ['dots'],

		port: 9876,

		colors: true,

		logLevel: config.LOG_ERROR,

		autoWatch: false,

		browsers: ['PhantomJS'],

		captureTimeout: 60000,

		singleRun: true
	});
};