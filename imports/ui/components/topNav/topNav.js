import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './topNav.html';
 
class TopNav {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.isNavCollapsed = true;
  	this.isCollapsed = false;
  	this.isCollapsedHorizontal = false;
  	this.items = [
  		'한국어',
  		'English'
  	];
  	this.status = {
  		isopen: false
  	};
  	this.toggled = function(open) {
  		$log.log('Dropdown is now: ', open);
  	};
  	this.toggleDropdown = function($event) {
  		$event.preventDafault();
  		$event.stopPropagation();
  		$scope.status.isopen = !$scope.status.isopen;
  	};
  	this.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
  }
}

const name = 'topNav';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: TopNav
});