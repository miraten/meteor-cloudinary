Package.describe({
  name: 'leesangwon:cloudinary',
  summary: 'Image upload to the Cloudinary',
  version: '0.5.1',
  git: 'https://github.com/miraten/meteor-cloudinary'
});

Npm.depends({
  cloudinary: "1.1.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use([
    'meteorhacks:npm@1.2.0',
    'service-configuration',
    'blaze',
    'spacebars',
    'templating'
  ], 'server');

  api.addFiles([
    'client/0.jquery.ui.widget.js',
    'client/1.jquery.iframe-transport.js',
    'client/2.jquery.fileupload.js',
    'client/3.jquery.cloudinary.js'
  ], 'client');

  api.addFiles(['client/uploader.js'], 'client');
  api.addFiles(['server/cloudinary.js'], 'server');

  api.export('cloudinaryUpload');
  api.export('cloudinaryDirectUpload');
  api.export('Cloudinary');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('leesangwon:cloudinary');
  api.addFiles('test/cloudinary-tests.js');
});
