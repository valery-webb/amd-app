requirejs.config({

    deps: ['main'],

    paths: {
        'jquery' : '3p/jquery',
        'underscore' : '3p/underscore',
        'backbone' : '3p/backbone'
    }
})

// requirejs(['main'], function () {
//     // running main.js file
// })