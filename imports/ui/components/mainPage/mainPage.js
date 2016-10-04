import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagnination from 'angular-utils-pagination';

import template from './mainPage.html';

import { name as MainCarousel } from '../mainCarousel/mainCarousel';

class MainPage {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);
  }
    
}
 
const name = 'mainPage';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagnination,
  MainCarousel
]).component(name, {
  template,
  controllerAs: name,
  controller: MainPage
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/main',
      template: '<main-page></main-page>'
    });
}