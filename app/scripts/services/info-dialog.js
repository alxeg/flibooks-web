define(['app', 'text!/views/book-info-dialog.html', 'services/data'], function(app, dialogTemplate) {

    app
        .controller('bookInfoController', ['$scope', '$mdDialog', 'book', function($scope, $mdDialog, book) {
            $scope.book = book;
            $scope.closeDialog = function() {
                $mdDialog.hide();
            };
        }])
        .factory('bookInfoService', ['$mdDialog', 'dataService', function($mdDialog, dataService) {
            var serviceData = {
                showBookInfoDialog: showBookInfoDialog
            };

            return serviceData;

            function showBookInfoDialog(book, event) {
                var parentEl = angular.element(document.body);
                $mdDialog.show({
                    parent: parentEl,
                    targetEvent: event,
                    template: dialogTemplate,
                    locals: {
                        book: book
                    },
                    onComplete: function(scope, element, options) {
                        dataService.getBook(scope.book.ID)
                            .then(function(data, status) {
                                scope.book = data;

                            },
                            function(data, status) {

                                });

                    },
                    controller: 'bookInfoController'
                });
            }


        }]);
});
