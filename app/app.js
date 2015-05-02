define(['ngAmd', 'ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria',
        'controllers/navigation'
    ],
    function(ngAmd) {
        var app = angular.module('fliApp', [
            'ngRoute',
            'ngMaterial'
        ]);

        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when("/home", ngAmd.route({
                    templateUrl: 'views/home.html',
                    controllerUrl: 'controllers/home'
                }))
                .when("/author/search", ngAmd.route({
                    templateUrl: 'views/author-search.html',
                    controllerUrl: 'controllers/author-search'
                }))
                .when("/author/books", ngAmd.route({
                    templateUrl: 'views/author-books.html',
                    controllerUrl: 'controllers/author-books'
                }))
                .when("/book/search", ngAmd.route({
                    templateUrl: 'views/books-search.html',
                    controllerUrl: 'controllers/books-search'
                }))
                .otherwise({
                    redirectTo: '/home'
                });
        }]);

        return ngAmd.bootstrap(app);
    });
