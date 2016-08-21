'use strict';

var app = angular.module('controllers', ['ngAnimate']);
// create the controller and inject Angular's $scope

app.controller('mainController', function($scope, $interval) {
    // create a message to display in our view

    $scope.slides = [{
        image: '/img/praktijk.png',
        description: 'De praktijk'
    }, {
        image: '/img/img2.png',
        description: 'ontdekken van hun eigen kwaliteiten'
    }, {
        image: '/img/img3.png',
        description: 'begeleiden van kinderen'
    }, {
        image: '/img/img4.png',
        description: 'kracht in zichzelf'
    }];

    $scope.callAtInterval = function() {
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
