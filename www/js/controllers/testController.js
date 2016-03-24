'use strict';

app.controller('TestController', ['$scope', function($scope) {


    if (typeof analytics !== 'undefined') analytics.trackView('Test Controller');
    else console.log('could not track');

    // console.log('tracked view home');
}]);
