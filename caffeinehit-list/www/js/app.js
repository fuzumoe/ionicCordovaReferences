var app = angular.module('caffeinehit', [
    'ionic','ngCordova',
    'caffeinehit.controllers',
    'caffeinehit.services',
    'caffeinehit.filters'
]);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});

app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = 'Token 5e1e802f0a565cdede8be0cb8085cbb926b599e5';
});