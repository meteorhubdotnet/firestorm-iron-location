Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-location',
  summary: 'Fork of iron:location for Firestorm',
  version: '1.0.5',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-location'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.3.6');

  api.use('underscore');
  api.use('tracker');
  api.use('jquery@3.0.0');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.5');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.5');

  api.use('meteorhubdotnet:firestorm-iron-url@1.0.5');

  api.use('appcache', {weak: true});

  api.addFiles('lib/utils.js', 'client');
  api.addFiles('lib/state.js', 'client');
  api.addFiles('lib/location.js', 'client');

  api.export(['urlToHashStyle', 'urlFromHashStyle'], 'client', {testOnly: true});
});

Package.onTest(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-location');
  api.use('tinytest');
  api.use('test-helpers');

  api.addFiles('test/location_test.js', 'client');
});
