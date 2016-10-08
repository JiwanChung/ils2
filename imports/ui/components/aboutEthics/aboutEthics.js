import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutEthics.html';

class AboutEthics {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'aboutEthics';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutEthics
});