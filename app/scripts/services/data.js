define(['app'], function(app) {

    app.factory('dataService', ['$http', '$q', function($http, $q) {
        var serviceData = {
            authorsSrch: {
                'author': '',
                'limit': 20
            },
            booksSrch: {
                'title': '',
                'author': '',
                'limit': 20
            },
            authorsRes: [],
            booksRes: [],

            searchForBooks: searchForBooks,
            searchForAuthors: searchForAuthors,
            listAuthorsBooks: listAuthorsBooks,
            getAuthor: getAuthor,
            getBook: getBook
        };

        return serviceData;

        function searchForBooks(title, author) {
            var def = $q.defer();

            if (title !== serviceData.booksSrch.title || author !== serviceData.booksSrch.author) {
                serviceData.booksSrch.author = author;
                serviceData.booksSrch.title = title;
                $http.post("/api/book/search", serviceData.booksSrch)
                    .success(function(data) {
                        serviceData.booksRes = data;
                        def.resolve(data);
                    })
                    .error(function() {
                        def.reject("Failed to find books");
                        serviceData.booksRes = [];
                    });
            } else {
                def.resolve(serviceData.booksRes);
            }
            return def.promise;
        }

        function searchForAuthors(name) {
            var def = $q.defer();

            if (name !== serviceData.authorsSrch.author) {
                serviceData.authorsSrch.author = name;
                $http.post("/api/author/search", serviceData.authorsSrch)
                    .success(function(data) {
                        serviceData.authorsRes = data;
                        def.resolve(data);
                    })
                    .error(function() {
                        def.reject("Failed to find authors");
                        serviceData.authorsRes = [];
                    });
            } else {
                def.resolve(serviceData.authorsRes);
            }
            return def.promise;
        }

        function listAuthorsBooks(id) {
            var def = $q.defer();

            $http.get("/api/author/"+id+"/books?no-details=true")
                .success(function(data) {
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to find authors");
                });
            return def.promise;
        }

        function getAuthor(id) {
            var def = $q.defer();

            $http.get("/api/author/"+id)
                .success(function(data) {
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to find author");
                });
            return def.promise;
        }

        function getBook(id) {
            var def = $q.defer();

            $http.get("/api/book/"+id)
                .success(function(data) {
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to find author");
                });
            return def.promise;
        }

    }]);

});
