import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './aboutMenu.html';
 
class AboutMenu {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.isNavCollapse = true;
    this.isCollapsed = false;

  }
}

const name = 'aboutMenu';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutMenu,
  bindings: {
    tabs: "<"
  }
});