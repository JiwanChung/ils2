import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagnination from 'angular-utils-pagination';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { name as PersonsSort } from '../personsSort/personsSort';
import template from './personsList.html';
import { Persons } from '../../../api/persons/index';

import { name as PersonAdd } from '../personAdd/personAdd';
import { name as PersonRemove } from '../personRemove/personRemove';
import { name as PersonImage } from '../personImage/personImage';
import { name as PersonAddButton } from '../personAddButton/personAddButton';

class PersonsList {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.perPage = 3;
    this.page = 1;
    this.sort = {
      name: 1
    };
    this.searchText = '';

    this.subscribe('persons', () => [{
        limit: parseInt(this.perPage),
        skip: parseInt((this.getReactively('page') - 1) * this.perPage),
        sort: this.getReactively('sort')
      }, this.getReactively('searchText')
    ]);

    this.subscribe('users');
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
      },
      currentUserId() {
        return Meteor.userId();
      }
    });
  }

  pageChanged(newPage) {
    this.page = newPage;
  }

  sortChanged(sort) {
    this.sort = sort;
  }
}
 
const name = 'personsList';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagnination,
  PersonAdd,
  PersonRemove,
  PersonImage,
  PersonAddButton
]).component(name, {
  template,
  controllerAs: name,
  controller: PersonsList
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('persons', {
      url: '/persons',
      template: '<persons-list></persons-list>'
    });
}