define(['app', 'angular', 'services/data', 'services/info-dialog'], function(app, angular) {

    return ['$scope', '$routeParams', 'dataService', 'bookInfoService',
            function($scope, $routeParams, dataService, bookInfoService) {
        $scope.books = [];
        $scope.author = '';


        $scope.bookInfo = function(index, event) {
            console.log("Get info on book at index " + index);
            bookInfoService.showBookInfoDialog($scope.books[index].ID, event);
        };

        $scope.downloadBook = function(bookId, event) {
            console.log("Download book with id " + bookId);
            angular.element('#downloadIframe').attr('src', 'api/book/' + bookId + '/download');
            event.stopPropagation();
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
