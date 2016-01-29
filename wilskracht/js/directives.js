'use strict';

var app = angular.module('directives', ['controllers']);

app.directive('navigationTabs', function() {
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
            }
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
        function setMarker(map){
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
