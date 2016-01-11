'use strict';

var app = angular.module('controllers', ['ngAnimate']);
// create the controller and inject Angular's $scope

var news = [{
    title: 'beunhaas',
    text: 'hallo ik ben een beunhaas'
}, {
    title: 'beunhaas',
    text: 'hallo ik ben een beunhaas'
}];
app.controller('mainController', function($scope, $interval) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $scope.slides = [{
        image: 'http://lorempixel.com/1000/300/food',
        description: 'abcdef'
    }, {
        image: 'http://lorempixel.com/1000/300/food',
        description: 'abcdef'
    }, {
        image: 'http://lorempixel.com/1000/300/sports',
        description: 'abcdef'
    }, {
        image: 'http://lorempixel.com/1000/300/people',
        description: 'abcdef'
    }];

    $scope.callAtInterval = function() {
        console.log("$scope.callAtInterval - Interval occurred");
        if ($scope.currentIndex < $scope.slides.length - 1) {
            $scope.currentIndex = $scope.currentIndex + 1;
        } else {
            $scope.currentIndex = 0;
        }
    }

    var interval;
    $scope.start = function() {
        $interval.cancel(interval);

        interval = $interval(function() {
            $scope.callAtInterval();
        }, 5000);
    }
    $scope.start();
    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function(index) {
        $scope.currentIndex = index;
        $scope.start();
    };

    $scope.isCurrentSlideIndex = function(index) {
        return $scope.currentIndex === index;
    };

    $scope.news = news;
});
