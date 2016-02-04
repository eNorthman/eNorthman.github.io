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
        image: 'http://lorempixel.com/1000/300/sports',
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

app.controller('contactController', function($scope, $http) {
    $scope.formData = {};
    $scope.submitForm = function(isValid) {
        $scope.submitted = true;
        if (isValid) {
            $http({
                method: 'POST',
                url: 'partials/mail.php',
                data: $.param($scope.formData),
                headers: {
                   'Content-Type': 'application/x-www-form-urlencoded' 
                }
            }).success(function(data) {
                console.log(data);
                if (!data.success) {
                    $scope.errorName = data.errors.name;
                    $scope.submissionMessage = data.messageError;
                    $scope.submission = true; //shows the success message
                } else {
                    $scope.submissionMessage = data.messageSuccess;
                    $scope.formData = {}; // form fields are emptied with this line
                    $scope.submission = true; //shows the success message
                    $scope.submitted = false;
                }
            })
        }
    }
});
