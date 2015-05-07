define(['app', 'services/data'], function(app) {

    return ['$scope', '$timeout', '$location', 'dataService',
        function($scope, $timeout, $location, dataService) {
            $scope.authors = dataService.authorsRes;

            $scope.search = dataService.authorsSrch.author;

            $scope.listBooks = function(id, event) {
                $location.path('/author/'+id+'/books');
            };

            $scope.$watch('search', function() {
                $timeout.cancel($scope.timeout);
                $scope.timeout = $timeout(function() {
                    if ($scope.search) {
                        dataService.searchForAuthors($scope.search)
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

        }
    ];
});
