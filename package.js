Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-location',
  summary: 'Fork of iron:location for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-location'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');

  api.use('underscore');
  api.use('tracker');
  api.use('jquery@3.0.0');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.15');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.15');

  api.use('meteorhubdotnet:firestorm-iron-url@1.0.15');

  api.use('appcache', {weak: true});

  api.addFiles('lib/utils.js', 'client');
  api.addFiles('lib/state.js', 'client');
  api.addFiles('lib/location.js', 'client');

  api.export(['urlToHashStyle', 'urlFromHashStyle'], 'client', {testOnly: true});
});
