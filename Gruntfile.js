module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    //name: ['main'],
                    include: ['config'],
                    baseUrl: "amd-ui-web/js/app/",
                    mainConfigFile: "amd-ui-web/js/app/config.js",
                    out: "build/optimized.min.js"
                }
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-requirejs');



    grunt.registerTask('default', ['requirejs']);

}