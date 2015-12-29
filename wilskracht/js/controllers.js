'use strict';

var app = angular.module('controllers', ['ngAnimate']);

// app.controller('TabController', function(){
// 	this.isCollapsed = true;
// 	this.tab = 1;

// 	this.setTab = function(value){
// 		this.tab = value;
// 	};

// 	this.isSet = function(tabValue){
// 		return this.tab === tabValue;
// 	}

// });

// create the controller and inject Angular's $scope

var news = [{
    title: 'beunhaas',
    text: 'hallo ik ben een beunhaas'
},
{
    title: 'beunhaas',
    text: 'hallo ik ben een beunhaas'
}];
app.controller('mainController', function($scope, $interval) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $scope.slides = [{
        image: 'http://lorempixel.com/1000/400/',
        description: 'abcdef'
    }, {
        image: 'http://lorempixel.com/1000/400/food',
        description: 'abcdef'
    }, {
        image: 'http://lorempixel.com/1000/400/sports',
        description: 'abcdef'
    }, {
        image: 'http://lorempixel.com/1000/400/people',
        description: 'abcdef'
    }];

 	$scope.callAtInterval = function() {
        console.log("$scope.callAtInterval - Interval occurred");
        if($scope.currentIndex < $scope.slides.length-1) {
        	$scope.currentIndex = $scope.currentIndex +1;
        } else{
        	$scope.currentIndex = 0;
        }
    }

    var interval;
    $scope.start = function () {
        $interval.cancel(interval);

        interval = $interval( function(){ $scope.callAtInterval(); }, 5000);
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
