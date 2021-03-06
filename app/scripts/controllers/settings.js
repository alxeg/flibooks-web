define(['ngAmd', 'services/data'], function(app) {

    app.controller('settings-controller', ['$scope', 'dataService', 'localStorageService', function($scope, dataService, localStorageService) {

        $scope.init = function() {
            $scope.noRemoved = localStorageService.get('noRemoved'); 
            $scope.selected = localStorageService.get('langs');
            if (! $scope.selected ) {
                $scope.selected = [];
            }
            dataService.getLanguages()
                .then(function(data, status) {
                        $scope.languages = data;
                    },
                    function(data, status) {
                        $scope.languages = [];
                    });
        };

        $scope.toggleLang = function(item) {
            var idx = $scope.selected.indexOf(item);
            if (idx > -1) $scope.selected.splice(idx, 1);
            else $scope.selected.push(item);
            localStorageService.set('langs', $scope.selected);
        };

        $scope.isSelected = function (item) {
            return $scope.selected.indexOf(item) > -1;
        };

        $scope.toggleNoRemoved = function() {
            $scope.noRemoved = !$scope.noRemoved;
            localStorageService.set('noRemoved', $scope.noRemoved); 
        };

        $scope.init();

    }]);

});
