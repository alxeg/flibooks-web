define(['app', 'angular', 'services/data'], function(app, angular) {

    return ['$scope', '$routeParams', 'dataService', function($scope, $routeParams, dataService) {
        $scope.books = [];
        $scope.author = '';


        $scope.bookInfo = function(index) {
            console.log("Get info on book at index "+index);
        };

        $scope.downloadBook = function(bookId, event) {
            console.log("Download book with id " + bookId);
            angular.element('#downloadIframe').attr('src', 'api/book/'+bookId+'/download');
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
