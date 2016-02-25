'use strict';

var app = angular.module('directives', ['controllers']);

app.directive('navigationTabs', function($window) {
    return {
        restrict: 'E',
        templateUrl: 'partials/navigation.html',
        controller: function($scope, $route) {
            this.isCollapsed = true;
            this.tab = $route.current.activetab;

            this.setTab = function(value) {
                this.tab = value;
            };

            this.isSet = function(tabValue) {
                return this.tab === tabValue;
            };
        },
        link: function(scope, element) {
            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 150) {
                    $('.navbar').addClass("navbar-xs");
                } else {
                    $('.navbar').removeClass("navbar-xs");
                }
            });
            angular.element($window).bind("click", function(e) {
                var isClickedOutside = element
                    .find(event.target)
                    .length > 0;

                if (isClickedOutside) {
                    return;
                }

                scope.$apply(function() {
                    scope.tab.isCollapsed = true;
                });
            });
        },
        controllerAs: 'tab'
    }
});

app.directive('footerTabs', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer.html'
    }
});

app.directive('myMap', function() {
    var link = function($scope, element, attrs) {
        var map, marker;
        var mapOptions = {
            center: new google.maps.LatLng(52.024581, 4.316469),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: true
        }

        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }

        function setMarker(map) {
            var markerOptions = {
                position: new google.maps.LatLng(52.024581, 4.316469),
                map: map,
                icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            };
            marker = new google.maps.Marker(markerOptions);
        }
        initMap();
        setMarker(map);
    }
    return {
        restrict: 'E',
        template: '<div id="sidebar_map"></div>',
        replace: true,
        link: link
    }
});
