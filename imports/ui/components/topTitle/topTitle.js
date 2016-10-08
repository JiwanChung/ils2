import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './topTitle.html';

class TopTitle {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'topTitle';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name
});