var requireConfig = {
	baseUrl: "app/js",
	paths: {
	  jquery: '../lib/jQuery/dist/jQuery',
	  underscore: '../lib/underscore/underscore',
	  angular: '../lib/angular/angular',
	  angularRoute: '../lib/angular-route/angular-route',
	  angularAnimate: './angular/angular-animate',
	  requirelib: '../lib/requirejs/require',
	  bootstrap: '../lib/bootstrap/dist/js/bootstrap',
	  uiBootstrap: '../lib/angular-bootstrap/ui-bootstrap-tpls',
	  ngStrap: '../lib/angular-strap/dist/angular-strap',
	  ngStrapTpl: '../lib/angular-strap/dist/angular-strap.tpl',
	  loadingBar: '../lib/angular-loading-bar/build/loading-bar',
	  toaster: '../lib/angularjs-toaster/toaster'
	},
	shim: {
		jquery: {exports: ['jQuery', '$']},
		underscore: {exports: '_' },
		angular: {
			deps: ['jquery'],
			exports: 'angular'
		},
		angularRoute: ['angular'],
		angularAnimate: {
			deps: ['angular']
		},
		bootstrap: {
			deps: ['angular']
		},
		uiBootstrap: {
			deps: ['angular']
		},
		ngStrap: {
			deps: ['angularAnimate']
		},
		ngStrapTpl: {
			deps: ['ngStrap']
		},
		loadingBar: {
			deps: ['angular']
		},
		toaster: {
			deps: ['angularAnimate']
		}
	},
	optimize: 'none',
	packages: ["controllers", "directives", "filters", "services"],
	include: ["requirelib"],
	priority: [
		"angular"
	],
	name: "main"
};

if(typeof(module) !== 'undefined'){
	module.exports = {
		requireConfig: requireConfig
	};
}