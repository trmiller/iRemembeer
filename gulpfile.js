var gulp = require('gulp');
var changed = require('gulp-changed');
var rjs = require('requirejs');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var htmlreplace = require('gulp-html-replace');
var clean = require('gulp-clean');
var changed = require('gulp-changed');
var karma = require('gulp-karma');
var requireConfigModule = require('./app/require.config');

var requireConfig = requireConfigModule.requireConfig;
var buildingProd = false;

gulp.task('initializeProdBuild', function(){
	buildingProd = true;
});

gulp.task('compileJS', function(){
	if(buildingProd){
		requireConfig.out = "build/js/main-compiled.js";
		requireConfig.optimize = 'uglify2';
	} else {
		requireConfig.dir = "build/js";
	}
	rjs.optimize(requireConfig);
});

gulp.task('compileLess', function(){
	var lessConfig = {
		relativeUrls: true,
		compress: buildingProd
	};

	gulp.src(['src/css/main.less'])
		.pipe(less(lessConfig))
		.pipe(gulp.dest('build/css'));
});

gulp.task('updatePathsInIndex.Html', function(){
	var stream = gulp.src('src/index.html');
	if(buildingProd){
		stream = stream.pipe(htmlreplace({
			js: {
				src: 'js/main-compiled.js'
			}
		}));
	}
	stream.pipe(gulp.dest('build/'));
});

gulp.task('clean', function(){
	return gulp.src('build/', {read: false}).pipe(clean());
});

gulp.task('copySourceFilesToBuildFolder', function(){
	gulp.src('src/views/**/*').pipe(gulp.dest('build/views'));
});

gulp.task('test-run', function(){
	var files = ["undefined.js"];
	gulp.src(files)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err){
			console.log(err);
		});
});

gulp.task('copyJSFilesToBuildFolder', function(){
	gulp.src('app/js/**/*')
		.pipe(changed('build/js'))
		.pipe(gulp.dest('build/js'));
});

gulp.task('watch', function(){
	gulp.watch('app/css/**/*.less', ['compileLess']);
	gulp.watch('app/index.htmls', ['updatePathsInIndex.Html']);
	gulp.watch('app/views/**/*', ['copySourceFilesToBuildFolder']);
	gulp.watch('app/js/**/*.html', ['copySourceFilesToBuildFolder']);
	gulp.watch('app/css/**/*.js', ['test-run', 'compileJS']);
	gulp.watch('test/**/*Tests.js', ['test-run']);
});

gulp.task('postCleanSteps', ['copySourceFilesToBuildFolder', 'compileJS', 'compileLess', 'updatePathsInIndex.Html']);

gulp.task('build', ['clean'], function(){
	gulp.run('test-run');
	gulp.run('postCleanSteps');
});

gulp.task('prod', ['initializeProdBuild', 'build']);

gulp.task('default', ['build', 'watch']);