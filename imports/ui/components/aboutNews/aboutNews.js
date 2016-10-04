import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutNews.html';

class AboutNews {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'aboutNews';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutNews
});