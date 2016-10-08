import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './affiliationLeft.html';
 
class AffiliationLeft {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'affiliationLeft';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AffiliationLeft,
  bindings: {
    bars: '<'
  }
});