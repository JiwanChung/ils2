import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularAnimate from 'angular-animate';
import angularTouch from 'angular-touch';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import angularScroll from 'angular-scroll';
import angularSticky from 'angular-sticky-index';
import ngMaterial from 'angular-material';
import ngMap from 'ngmap';

import template from './ils.html';
import { name as PersonsList } from '../personsList/personsList';
import { name as PersonDetails } from '../personDetails/personDetails';
import { name as MainCarousel } from '../mainCarousel/mainCarousel';
import { name as TopAll } from '../topAll/topAll';
import { name as MainAccordian } from '../mainAccordian/mainAccordian';
import { name as Bfooter } from '../bfooter/bfooter';
import { name as MainPage } from '../mainPage/mainPage';
import { name as AboutPage } from '../aboutPage/aboutPage';
import { name as AffiliationPage } from '../affiliationPage/affiliationPage';
import { name as PeoplePage } from '../peoplePage/peoplePage';
import { name as LinksPage } from '../linksPage/linksPage';

class Ils {}

const name = 'ils';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  ngMaterial,
  angularAnimate,
  angularTouch,
  uiBootstrap,
  uiRouter,
  angularScroll,
  angularSticky,
  MainPage,
  AboutPage,
  PeoplePage,
  AffiliationPage,
  LinksPage,
  PersonsList,
  PersonDetails,
  TopAll,
  Bfooter,
  MainCarousel,
  MainAccordian,
  'accounts.ui',
  ngMap
]).component(name, {
  template,
  controllerAs: name,
  controller: Ils
})
	.config(config)
	.run(run);

function config($locationProvider, $urlRouterProvider, $mdIconProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/main');


  const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
 
  $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',
      iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',
      iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',
      iconPath + 'svg-sprite-image.svg');
}

function run($rootScope, $state) {
  'ngInject';
 
  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('main');
      }
    }
  );
}