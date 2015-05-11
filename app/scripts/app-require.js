require.config({
    paths: {
        'angular': '../bower_components/angular/angular',
        'ngAmd': '../bower_components/angularAMD/angularAMD',
        'ngAria': '../bower_components/angular-aria/angular-aria',
        'ngRoute': '../bower_components/angular-route/angular-route',
        'ngMessages': '../bower_components/angular-messages/angular-messages',
        'ngAnimate': '../bower_components/angular-animate/angular-animate',
        'ngMaterial': '../bower_components/angular-material/angular-material',
        'jquery': '../bower_components/jquery/dist/jquery',
        'text': '../bower_components/requirejs-text/text'
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
        ngMessages: {
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
            deps: ['jquery'],
            exports: 'angular'
        },
        jquery: {
            exports: 'jquery'
        }
    },
    baseUrl: 'scripts/',
    deps: ['app']
});

