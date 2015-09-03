define(['ngAmd', 'ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'ngLocalStorage',
        'controllers/navigation', 'controllers/settings', 'common/filters'
    ],
    function(ngAmd) {
        var app = angular.module('fliApp', [
            'ngRoute',
            'ngMaterial',
            'ngMessages',
            'LocalStorageModule'
        ]);

        app.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('fliBooks')
                .setStorageCookie(0, '/');

            $routeProvider
                .when("/home", ngAmd.route({
                    templateUrl: 'views/home.html',
                    controllerUrl: 'controllers/home'
                }))
                .when("/author/search", ngAmd.route({
                    templateUrl: 'views/author-search.html',
                    controllerUrl: 'controllers/author-search'
                }))
                .when("/author/:id/books", ngAmd.route({
                    templateUrl: 'views/author-books.html',
                    controllerUrl: 'controllers/author-books'
                }))
                .when("/book/search", ngAmd.route({
                    templateUrl: 'views/books-search.html',
                    controllerUrl: 'controllers/books-search'
                }))
                .when("/library/search", ngAmd.route({
                    templateUrl: 'views/library-search.html',
                    controllerUrl: 'controllers/library-search'
                }))
                .otherwise({
                    redirectTo: '/home'
                });
        }]);

        return ngAmd.bootstrap(app);
    });
