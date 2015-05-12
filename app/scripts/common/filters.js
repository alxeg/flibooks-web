define(['ngAmd'], function(ngAmd) {
    ngAmd.filter('highlight', ['$sce', function($sce) {
        return function(text, phrase) {
            phrase.split(" ").forEach(function(term) {
                if (term) {
                    text = text.replace(new RegExp('(' + term + ')', 'gi'),
                        '<span class="highlighted">$1</span>');
                }
            });

            return $sce.trustAsHtml(text);
        };
    }]);

});
