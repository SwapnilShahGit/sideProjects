// SystemJS is the module loader for the application. 
// It loads the libraries and our modules and then catches and logs errors, 
// that may occur during the app launch.
System.config({
  packages: {
    scripts: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
System.import('scripts/boot')
  .then(null, console.error.bind(console));