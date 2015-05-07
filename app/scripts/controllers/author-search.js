define(['app', 'services/data'], function(app) {

    return ['$scope', '$timeout', '$http', 'dataService', function($scope, $timeout, $http, dataService) {
        $scope.authors = dataService.authorsRes;

        $scope.search = dataService.search.author;

        $scope.listBooks = function (id, event) {
            console.log("Go to books of author id " + id);
        };

        $scope.$watch('search', function() {
            $timeout.cancel($scope.timeout);
            $scope.timeout = $timeout(function() {
                if ($scope.search) {
                    dataService.searchAuthors($scope.search)
                        .then(function(data, status) {
                            $scope.status = status;
                            $scope.authors = data;
                        },
                        function(data, status) {
                            $scope.authors = [];
                        });
                }
            }, 2000);
        });

    }];
});
