'use strict';

var app = angular.module('directives', ['controllers']);

app.directive('navigationTabs', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/navigation.html',
		controller:function(){
			this.isCollapsed = true;
			this.tab = 1;

			this.setTab = function(value){
				this.tab = value;
			};

			this.isSet = function(tabValue){
				return this.tab === tabValue;
			}
		},
		controllerAs: 'tab'
	}
})