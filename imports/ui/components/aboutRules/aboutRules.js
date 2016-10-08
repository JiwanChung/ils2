import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutRules.html';

class AboutRules {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'aboutRules';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutRules
});