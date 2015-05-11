define(['app', 'text!/views/book-info-dialog.html'], function(app, dialogTemplate) {

    app.factory('bookInfoService', ['$mdDialog', function($mdDialog) {
        var serviceData = {
            showBookInfoDialog: showBookInfoDialog
        };

        return serviceData;

        function showBookInfoDialog(book) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: event,
                template: dialogTemplate,
                locals: {
                    book: book
                },
                controller: dialogController
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
