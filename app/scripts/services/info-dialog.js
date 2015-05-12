define(['app', 'text!/views/book-info-dialog.html', 'services/data'], function(app, dialogTemplate) {

    app.factory('bookInfoService', ['$mdDialog', 'dataService', function($mdDialog, dataService) {
        var serviceData = {
            showBookInfoDialog: showBookInfoDialog
        };

        return serviceData;

        function showBookInfoDialog(bookId, event) {
            var parentEl = angular.element(document.body);
            dataService.getBook(bookId)
                .then(function(data, status) {
                        $mdDialog.show({
                            parent: parentEl,
                            targetEvent: event,
                            template: dialogTemplate,
                            locals: {
                                book: data
                            },
                            controller: dialogController
                        });
                    },
                    function(data, status) {

                    });


            function dialogController(scope, $mdDialog, book) {
                scope.book = book;
                scope.closeDialog = function() {
                    $mdDialog.hide();
                };
            }
        }

    }]);
});
