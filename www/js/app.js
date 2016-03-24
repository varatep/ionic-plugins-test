// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
    $stateProvider.state('home', {
        url:'/home',
        controller: 'testController'
    });

    $urlRouterProvider.otherwise('/home');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //   var push = new Ionic.push({
    //       'debug': true
    //   });
    //   push.register(function(token) {
    //       console.log('Device token:', token.token);
    //   });

    if (typeof analytics !== 'undefined') {
        analytics.startTrackerWithId('UA-75505376-1');
        analytics.setUserId('varatep2');
        analytics.trackEvent('All','Init');
        analytics.debugMode();
    } else {
        console.log('Google Analytics Unavailable');
    }


    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
