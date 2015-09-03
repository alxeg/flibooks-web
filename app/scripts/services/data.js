define(['ngAmd'], function(app) {

    app.factory('dataService', ['$http', '$q', 'localStorageService', function($http, $q, localStorageService) {

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
            selectedLangs: [],

            searchForBooks: searchForBooks,
            searchForAuthors: searchForAuthors,
            listAuthorsBooks: listAuthorsBooks,
            listLibraryBooks: listLibraryBooks,
            getAuthor: getAuthor,
            getBook: getBook,
            getLanguages: getLanguages
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

        function listLibraryBooks(libId) {
            var def = $q.defer();

            $http.get("/api/book/lib/"+libId)
                .success(function(data) {
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to find authors");
                });
            return def.promise;
        }

        function getLanguages() {
            var def = $q.defer();

            $http.get("/api/book/langs")
                .success(function(data) {
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to find authors");
                });
            return def.promise;
        }

    }]);

});
