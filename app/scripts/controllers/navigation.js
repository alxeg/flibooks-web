define(['ngAmd'], function(ngAmd) {
    var navMenu = [{
        "title": "authors",
        "url": "/author/search",
        "icon": "author.svg",
        "selectionPath": "/author/"
    }, {
        "title": "books",
        "url": "/book/search",
        "icon": "lookup.svg",
        "selectionPath": "/book/"
    }, {
        "title": "library",
        "url": "/library/search",
        "icon": "books.svg",
        "selectionPath": "/library/"
    }];

    ngAmd.controller('navigation-controller', [
        '$scope', '$mdSidenav', '$location', 

        function($scope, $mdSidenav, $location) {

            $scope.toggleNavigation = function() {
                $mdSidenav('left').toggle();
            };

            $scope.openPage = function(menuItem) {
                $location.path(menuItem.url);
                $mdSidenav('left').close();
            };

            $scope.isSelected = function(menuItem) {
                return $location.url().indexOf(menuItem.selectionPath) === 0;
            };

            $scope.menu = navMenu;

        }
    ]);
});
