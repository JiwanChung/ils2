import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './bfooter.html';

class Bfooter {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'bfooter';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: Bfooter
});