import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagnination from 'angular-utils-pagination';

import template from './aboutPage.html';

import { name as AboutGreetings } from '../aboutGreetings/aboutGreetings';
import { name as AboutHistory } from '../aboutHistory/aboutHistory';
import { name as AboutOrganization } from '../aboutOrganization/aboutOrganization';
import { name as AboutRules } from '../aboutRules/aboutRules';
import { name as AboutEthics } from '../aboutEthics/aboutEthics';
import { name as AboutMap } from '../aboutMap/aboutMap';
import { name as AboutNews } from '../aboutNews/aboutNews';

class AboutPage {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);
  }
    
}
 
const name = 'aboutPage';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagnination,
  AboutGreetings,
  AboutHistory,
  AboutOrganization,
  AboutRules,
  AboutEthics,
  AboutMap,
  AboutNews
]).component(name, {
  template,
  controllerAs: name,
  controller: AboutPage
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about-page></about-page>'
    });
}