define(['app', 'services/data'], function(app) {

    return ['$scope', '$routeParams', 'dataService', function($scope, $routeParams, dataService) {
        $scope.books = [];
        $scope.author = '';

        $scope.downloadBook = function(bookId, event) {
            console.log("Download book with id " + bookId);
        };


        $scope.init = function(id) {
            dataService.listAuthorsBooks(id)
                .then(function(data, status) {
                        $scope.books = data;
                    },
                    function(data, status) {
                        $scope.books = [];
                    });

            dataService.getAuthor(id)
                .then(function(data, status) {
                        $scope.author = data.name;
                    },
                    function(data, status) {
                        $scope.author = '';
                    });


        };

        $scope.init($routeParams.id);
    }];
});
