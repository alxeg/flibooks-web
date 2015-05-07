define(['app'], function(app) {

    app.factory('dataService', ['$http', '$q', function($http, $q) {
        var serviceData = {
            authorsSrch: {
                author: '',
                limit: 10
            },
            authorsRes: [],

            searchForAuthors: searchForAuthors,
            listAuthorsBooks: listAuthorsBooks,
            getAuthor: getAuthor
        };

        return serviceData;

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

            $http.get("/api/author/"+id+"/books")
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

    }]);

});
