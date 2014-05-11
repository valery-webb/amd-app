define([], function () {

    var initialize,
        baseDomElement;

    // Here is will init all start modules for the app
    initialize = function()  {
        $('.init-box').html('Main app module loaded');
    }

    return {
        initialize: initialize
    }

});