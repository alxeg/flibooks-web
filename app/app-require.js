require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'ngAmd': 'bower_components/angularAMD/angularAMD',
        'ngAria': 'bower_components/angular-aria/angular-aria',
        'ngRoute': 'bower_components/angular-route/angular-route',
        'ngAnimate': 'bower_components/angular-animate/angular-animate',
        'ngMaterial': 'bower_components/angular-material/angular-material'
    },
    shim: {
        ngRoute: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngAria: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngAnimate: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngMaterial: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngAmd: {
            deps: ['angular'],
            exports: 'angular'
        },
        angular: {
            exports: 'angular'
        }
    },
    baseUrl: '/',
    deps: ['app']
});

