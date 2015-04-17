module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: '\n\n',
      },
      dist: {
        src: ['src/binocular-data-services/*'],
        dest: 'binocular-data-service.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['concat']);
};