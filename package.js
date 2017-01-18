Package.describe( {
  name: 'phaser',
  version: '2.6.2-0',
  summary: 'Wrapper around Phaser to make it usable in Meteor.',
  git: 'https://github.com/Vrakfall/meteor-phaser',
  documentation: 'README.md'
} );

Package.onUse( function ( api ) {
  api.versionsFrom( '1.0' );
  api.mainModule( 'phaser.js' );
  api.addFiles( 'node_modules/phaser/build/phaser.min.js', 'client', {
    bare: true
  } );
} );

// No test yet