import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './mainAccordian.html';

class MainAccordian {
  constructor($scope, $reactive) {
    'ngInject';

    this.oneAtATime = true;

    $reactive(this).attach($scope);
  }
}
 
const name = 'mainAccordian';
 
// create a module
export default angular.module(name, [
  angularMeteor
  ]).component(name, {
    template,
    controllerAs: name,
    controller: MainAccordian
});
