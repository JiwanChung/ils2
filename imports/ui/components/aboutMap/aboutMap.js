import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './aboutMap.html';

class AboutMap {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1UNbFEvd3snhq4xCLRe2QDQHchq0xzBc";
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