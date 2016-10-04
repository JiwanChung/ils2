import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutMap.html';

class AboutMap {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'aboutMap';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutMap
});