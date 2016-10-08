module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
        options: {
            singleQuotes: true,
        },
        app1: {
            files: {
                '/import/ui/component/ils/ils.js': ['/import/ui/component/ils/ils.js'],
                },
            },
        },          //grunt task configuration will go here     
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate'); 

    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate']);
}