requirejs.config({

    /*baseUrl: '../3p',*/

    deps: ['main'],

    paths: {
        'jquery': '../3p/jquery',
        'underscore': '../3p/underscore',
        'backbone': '../3p/backbone'
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});
