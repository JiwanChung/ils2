import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularAnimate from 'angular-animate';
import angularTouch from 'angular-touch';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import angularScroll from 'angular-scroll';
import angularSticky from 'angular-sticky-plugin';

import template from './ils.html';
import { name as PersonsList } from '../personsList/personsList';
import { name as PersonDetails } from '../personDetails/personDetails';
import { name as Navigation } from '../navigation/navigation';
import { name as MainCarousel } from '../mainCarousel/mainCarousel';
import { name as TopAll } from '../topAll/topAll';
import { name as MainAccordian } from '../mainAccordian/mainAccordian';
import { name as Bfooter } from '../bfooter/bfooter';
import { name as MainPage } from '../mainPage/mainPage';
import { name as AboutPage } from '../aboutPage/aboutPage';

class Ils {}
 
const name = 'ils';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  angularAnimate,
  angularTouch,
  uiBootstrap,
  uiRouter,
  angularScroll,
  angularSticky,
  MainPage,
  AboutPage,
  PersonsList,
  PersonDetails,
  Navigation,
  TopAll,
  Bfooter,
  MainCarousel,
  MainAccordian,
  'accounts.ui'
]).component(name, {
  template,
  controllerAs: name,
  controller: Ils
})
	.config(config)
	.run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/main');
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