// This section sets up some basic app metadata,
// the entire section is optional.
// Note that the NAME below MUST be set to the same as the name of this file or
// else we will get Cordova errors
App.info({
  id: 'com.sureproductconsulting.trackmeetgenius',
  version: '0.0.1',
  name: 'TrackMeetGenius',
  description: 'Easily Manage a Track Meet from your mobile device',
  author: 'Sue Raisty',
  email: 'sraisty@sureproductconsulting.com',
  website: 'http://sureproductconsulting.com',
});
// Set up resources such as icons and launch screens.
App.icons({
  // iOS
  iphone_2x: 'resources/icons/icon-60x60@2x.png',
  iphone_3x: 'resources/icons/icon-60x60@3x.png',
  ipad: 'resources/icons/icon-76x76@1x.png',
  ipad_2x: 'resources/icons/icon-76x76@2x.png',
  ipad_pro: 'resources/icons/icon-167x167.png',

  // Android
  // 'android_mdpi': 'resources/icons/icon-48x48.png',
  android_hdpi: 'resources/icons/icon-72x72.png',
  android_xhdpi: 'resources/icons/icon-96x96.png',
  android_xxhdpi: 'resources/icons/icon-144x144.png',
  android_xxxhdpi: 'resources/icons/icon-192x192.png',
});

App.launchScreens({
  // iOS
  // 320x480@2x is 640 x 960
  iphone_2x: 'resources/splash/splash-320x480@2x.png',
  // 320x568@x is 640x1136
  iphone5: 'resources/splash/splash-320x568@2x.png',
  // 375x667@2x is 750x1334
  iphone6: 'resources/splash/splash-375x667@2x.png',
  // 414x736@3x is 1242x2208
  iphone6p_portrait: 'resources/splash/splash-414x736@3x.png',
  // 736x414@3x is 2208x1242
  iphone6p_landscape: 'resources/splash/splash-736x414@3x.png',
  // 768x1024
  ipad_portrait: 'resources/splash/splash-768x1024.png',
  // @2x is 1535px x 2048px
  ipad_portrait_2x: 'resources/splash/splash-768x1024@2x.png',
  // 1024x768
  ipad_landscape: 'resources/splash/splash-1024x768.png',
  // @2x is 2048px x 1536px
  ipad_landscape_2x: 'resources/splash/splash-1024x768@2x.png',

  // Android
  android_mdpi_portrait: 'resources/splash/splash-320x480.png',
  android_mdpi_landscape: 'resources/splash/splash-480x320.png',
  android_hdpi_portrait: 'resources/splash/splash-480x800.png',
  android_hdpi_landscape: 'resources/splash/splash-800x480.png',
  android_xhdpi_portrait: 'resources/splash/splash-720x1280.png',
  android_xhdpi_landscape: 'resources/splash/splash-1280x720.png',
  android_xxhdpi_portrait: 'resources/splash/splash-1080x1440.png',
  android_xxhdpi_landscape: 'resources/splash/splash-1440x1080.png',
//  android_xxxhdpi_portrait: 'resources/splash/splash-1280x1920.png',
//  android_xxxhdpi_landscape: 'resources/splash/splash-1920x1280.png',
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xed196e0');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
App.setPreference('deployment-target', '9.0', 'ios');


/*
// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});

// Add custom tags for a particular PhoneGap/Cordova plugin
// to the end of generated config.xml.
// Universal Links is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="localhost:3000" />
  </universal-links>
`);*/
