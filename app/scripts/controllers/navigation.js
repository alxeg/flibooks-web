define(['ngAmd'], function(ngAmd) {
    var navMenu = [{
            "title": "authors",
            "url": "/author/search",
            "icon": "author.svg",
            "selectionPath": "/author/"
        }, {
            "title": "books",
            "url": "/book/search",
            "icon": "books.svg",
            "selectionPath": "/book/"
        }
    ];

    ngAmd.controller('navigation-controller', ['$scope', '$mdSidenav', '$location',
        function($scope, $mdSidenav, $location) {
            $scope.toggleNavigation = function() {
                $mdSidenav('left').toggle();
            };

            $scope.openPage = function(menuItem) {
                $location.path(menuItem.url);
            };

            $scope.isSelected = function(menuItem) {
                return $location.url().indexOf(menuItem.selectionPath)===0;
            };

            $scope.menu = navMenu;

        }
    ]);
});