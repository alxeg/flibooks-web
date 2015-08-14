define(['app', 'services/data'], function(app) {

    return ['$scope', '$timeout', '$location', 'dataService',
        function($scope, $timeout, $location, dataService) {
            $scope.search = '';

            $scope.searchBooks = function(event) {
                if ($scope.search) {
                    dataService.listLibraryBooks($scope.search)
                        .then(function(data, status) {
                                $scope.status = status;
                                $scope.books = data;
                            },
                            function(data, status) {
                                $scope.search = '';
                                $scope.books = [];
                            });
                }
            };

            $scope.downloadBook = function(bookId, event) {
                console.log("Download book with id " + bookId);
                angular.element('#downloadIframe').attr('src', 'api/book/' + bookId + '/download');
                event.stopPropagation();
            };

        }
    ];
});
