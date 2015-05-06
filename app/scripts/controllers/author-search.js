define(['app'], function(app) {

    return ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
        $scope.authors = [];

        $scope.search = {
            author: ""
        };

        $scope.listBooks = function (id, event) {
            console.log("Go to books of author id " + id);
        };

        $scope.$watch('search.author', function() {
            $timeout.cancel($scope.timeout);
            $scope.timeout = $timeout(function() {
                if ($scope.search.author) {
                    $http.post('/api/author/search', {
                            "author": $scope.search.author
                        })
                        .success(function(data, status) {
                            $scope.status = status;
                            $scope.authors = data;
                        })
                        .error(function(data, status) {
                            $scope.authors = [];
                        });
                }
            }, 2000);
        });

    }];
});
