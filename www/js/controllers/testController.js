'use strict';

app.controller('TestController', ['$scope', '$ionicPlatform', '$ionicPopup', function($scope, $ionicPlatform, $ionicPopup) {

    $ionicPlatform.ready(function() {
        if (typeof analytics !== 'undefined') {
            analytics.trackView('Test Controller');
            analytics.trackEvent('All','Test Controller');
            console.log('tracking test controller');
            $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                template: 'Made it'
            });
        } else {
            console.log('could not track');
            $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                template: 'Didn\'t :('
            });
        }
    });



    // console.log('tracked view home');
}]);
