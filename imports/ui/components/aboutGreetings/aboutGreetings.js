import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutGreetings.html';

class AboutGreetings {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'aboutGreetings';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutGreetings
});