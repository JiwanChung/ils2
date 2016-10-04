import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as TopNav } from '../topNav/topNav';
import { name as TopTitle } from '../topTitle/topTitle';
import { name as TopMenu } from '../topMenu/topMenu';

import template from './topAll.html';
 
class TopAll {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

  }
}

const name = 'topAll';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  TopNav,
  TopMenu,
  TopTitle
]).component(name, {
  template,
  controllerAs: name,
  controller: TopAll
});