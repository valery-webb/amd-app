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
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "build/main.min.css": "amd-ui-web/less/main.less"
                }
            }
        },

        watch: {
            styles: {
                files: ['amd-ui-web/less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },

        jasmine : {
            src : 'amd-ui-web/tests/src/player.js',
            options : {
                specs : 'amd-ui-web/tests/spec/player.spec.js',
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfig: {
                        baseUrl: ''
                    }
                }
            }
        },
    });



    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');


    //grunt.registerTask('default', ['requirejs', 'less', 'watch', 'jasmine']);

    grunt.registerTask('default', ['requirejs', 'jasmine']);

}