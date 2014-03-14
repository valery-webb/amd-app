define([

    //'../../3p/underscore',
    //'../../3p/backbone'
    'backbone'
    ], 

    function (Backbone) {
        var TestCollection = Backbone.Collection.extend({
            url: '/server/folder',
            initialize: function(){
                console.log('test-collection ready');
            }
        })

        return TestCollection;
})