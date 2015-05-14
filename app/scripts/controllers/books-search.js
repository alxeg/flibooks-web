define(['app', 'services/data', 'services/info-dialog'], function(app) {

    return ['$scope', '$timeout', '$location', 'dataService', 'bookInfoService',
        function($scope, $timeout, $location, dataService, bookInfoService) {
            $scope.books = dataService.booksRes;

            $scope.searchTitle = dataService.booksSrch.title;
            $scope.searchAuthor = dataService.booksSrch.author;


            $scope.bookInfo = function(index, event) {
                console.log("Get info on book at index " + index);
                bookInfoService.showBookInfoDialog($scope.books[index], event);

            };

            $scope.downloadBook = function(bookId, event) {
                console.log("Download book with id " + bookId);
                angular.element('#downloadIframe').attr('src', 'api/book/' + bookId + '/download');
                event.stopPropagation();
            };

            $scope.$watch('[searchTitle, searchAuthor]', function() {
                $timeout.cancel($scope.timeout);
                $scope.timeout = $timeout(function() {
                    if ($scope.searchTitle) {
                        dataService.searchForBooks($scope.searchTitle, $scope.searchAuthor)
                            .then(function(data, status) {
                                    $scope.status = status;
                                    $scope.books = data;
                                },
                                function(data, status) {
                                    $scope.books = [];
                                });
                    }
                }, 2000);
            });


        }
    ];
});
