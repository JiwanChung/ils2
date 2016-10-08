import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagnination from 'angular-utils-pagination';

import template from './aboutPage.html';

import { name as AboutMenu } from '../aboutMenu/aboutMenu';

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

    this.tabs = [
      { num: 0, title: '인사말', link: '#greetings'},
      { num: 1, title: '연혁', link: '#history'},
      { num: 2, title: '조직도', link: '#organization'},
      { num: 3, title: '규정', link: '#rules'},
      { num: 4, title: '윤리규정', link: '#ethics'},
      { num: 5, title: '오시는길', link: '#map'},
      { num: 6, title: '소식', link: '#news'}
    ];  
  }
    
}
 
const name = 'aboutPage';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagnination,
  AboutMenu,
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