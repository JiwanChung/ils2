import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagnination from 'angular-utils-pagination';

import template from './affiliationPage.html';

import { name as AboutMenu } from '../aboutMenu/aboutMenu';

import { name as AffiliationLeft } from '../affiliationLeft/affiliationLeft';

import { name as AboutGreetings } from '../aboutGreetings/aboutGreetings';
import { name as AboutHistory } from '../aboutHistory/aboutHistory';
import { name as AboutOrganization } from '../aboutOrganization/aboutOrganization';
import { name as AboutRules } from '../aboutRules/aboutRules';
import { name as AboutEthics } from '../aboutEthics/aboutEthics';
import { name as AboutMap } from '../aboutMap/aboutMap';
import { name as AboutNews } from '../aboutNews/aboutNews';

class AffiliationPage {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.tabs= [
      { num: 0, title: '녹색성장법제연구사업단', link: '#green'},
      { num: 1, title: '기후변화와국제연구사업단', link: '#climate'},
      { num: 2, title: '공공거버넌스와법', link: '#public'},
      { num: 3, title: '글로벌비즈니스와법', link: '#global'},
      { num: 4, title: '의료과학기술과법', link: '#medical'},
      { num: 5, title: '중국법센터', link: '#china'},
      { num: 6, title: '아시아법센터', link: '#asia'},
      { num: 7, title: 'EU법센터', link: '#eu'}
    ];

    this.greenbar = [
      { num: 0, title: '인사말', link: '#ggreetings'},
      { num: 1, title: '사업소개', link: '#gabout'},
      { num: 2, title: '조직도 및 연락처', link: '#gorganization'},
      { num: 3, title: '사업성과', link: '#gfruit'},
      { num: 4, title: '자료실', link: '#gdata'}
    ];
  }
    
}
 
const name = 'affiliationPage';
 
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
  AboutNews,
  AffiliationLeft
]).component(name, {
  template,
  controllerAs: name,
  controller: AffiliationPage
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('affilation', {
      url: '/affiliation',
      template: '<affiliation-page></affiliation-page>'
    });
}