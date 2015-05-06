define(['app'], function(app) {

    return ['$scope', '$timeout', function($scope, $timeout) {
        $scope.search = {
            author: ""
        };

        $scope.$watch('search.author', function() {
            $timeout.cancel($scope.timeout);
            $scope.timeout = $timeout(function() {
                if ($scope.search.author) {
                    console.log($scope.search.author);
                }
            }, 2000);
        });

    }];
});
