requirejs.config({

    //baseUrl: '',

    deps: ['main'],

    paths: {
        'jquery': '../3p/jquery',
        'underscore': '../3p/underscore',
        'backbone': '../3p/backbone',
        'bootstrap': '../../ui-sources/bootstrap/js/bootstrap.min'
    },

    shim: {

        underscore: {
            exports: '_'
        },

        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        bootstrap: {
            deps: ['jquery']
        }
    }
});

// bootstrap injection
requirejs([
    'jquery', 
    'bootstrap'
    ], function($, _bootstrap){
        // this is where all the site code should begin
        return {};
});
