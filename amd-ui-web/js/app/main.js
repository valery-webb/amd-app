define([

    'collections/test-collection'
    ,'models/test-model'
    ,'views/test-view'

    ], 

    function (TestCollection, TestModel, TestView) {
        var testCollection = new TestCollection({});
        var testModel = new TestModel({});
        var testView = new TestView({});
})