Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-location',
  summary: 'Fork of iron:location for Firestorm',
  version: '1.0.4',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-location'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.2');

  api.use('underscore');
  api.use('tracker');
  api.use('jquery@3.0.0');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.4');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.4');

  api.use('meteorhubdotnet:firestorm-iron-url@1.0.4');

  api.use('appcache', {weak: true});

  api.add_files('lib/utils.js', 'client');
  api.add_files('lib/state.js', 'client');
  api.add_files('lib/location.js', 'client');

  api.export(['urlToHashStyle', 'urlFromHashStyle'], 'client', {testOnly: true});
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-location');
  api.use('tinytest');
  api.use('test-helpers');

  api.add_files('test/location_test.js', 'client');
});
