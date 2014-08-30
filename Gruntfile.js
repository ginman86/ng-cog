module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      development: {
        files: [{
          dot: true,
          src: ['public/*']
        }]
      }
    },
    copy: {
      target:{
        files: [{
          expand: true,
          flatten: true,
          src: 'app/partials/*',
          dest: 'public/partials'
        },
        {
          expand: true,
          flatten: true,
          src: 'app/js/*',
          dest: 'public/js'
        },
        {
          expand: true,
          flatten: true,
          src: 'app/css/*',
          dest: 'public/css'
        },
        {
          expand: true,
          flatten: true,
          src: 'app/img/*',
          dest: 'public/img'
        },
        {
          expand: true,
          flatten: true,
          src: 'app/*.html',
          dest: 'public/'
        },
        {
          expand: true,
          cwd: 'app/bower_components',
          src: '**/*',
          dest: 'public/bower_components'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['app/js/*'],
        tasks: ['clean', 'copy'],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['app/partials/*'],
        tasks: ['clean', 'copy'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['app/css/*'],
        tasks: ['clean', 'copy'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.registerTask('build',['clean', 'copy', 'watch'])
}

