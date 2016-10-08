import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './peoplePage.html';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { name as PersonsSort } from '../personsSort/personsSort';
import { name as PeopleTiles } from '../peopleTiles/peopleTiles';
import { Persons } from '../../../api/persons/index';

class PeoplePage {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.sort = {
      name: 1
    };
    this.searchText = '';

    this.subscribe('persons', () => [{
        sort: this.getReactively('sort')
      }, this.getReactively('searchText')
    ]);
    this.subscribe('images');

    this.helpers({
      persons() {
        return Persons.find({}, {
          sort: this.getReactively('sort')
        });
      },
      personsCount() {
        return Counts.get('numberOfPersons');
      },
      isLoggedIn() {
        return !!Meteor.userId();
      }
    });
  }
  sortChanged(sort) {
    this.sort = sort;
  }
    
}
 
const name = 'peoplePage';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  PeopleTiles
]).component(name, {
  template,
  controllerAs: name,
  controller: PeoplePage
})
  .config(config);

function config($stateProvider, $mdIconProvider) {
  'ngInject';
  $stateProvider
    .state('people', {
      url: '/people',
      template: '<people-page></people-page>'
    });
  $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
}