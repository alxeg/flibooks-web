define(['app'], function(app) {

    app.factory('dataService', ['$http', '$q', function($http, $q) {
        var serviceData = {
            search: {
                title: '',
                author: '',
                limit: 10
            },
            authorsRes: [],

            searchAuthors: searchAuthors
        };

        return serviceData;

        function searchAuthors(name) {
            var def = $q.defer();

            if (name !== serviceData.search.author) {
                serviceData.search.author = name;
                $http.post("/api/author/search", serviceData.search)
                    .success(function(data) {
                        serviceData.authorsRes = data;
                        def.resolve(data);
                    })
                    .error(function() {
                        def.reject("Failed to find authors");
                    });
            } else {
                def.resolve(serviceData.authorsRes);
            }
            return def.promise;
        }
    }]);

});
