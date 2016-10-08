import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './linksPage.html';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { name as PersonsSort } from '../personsSort/personsSort';
import { Links } from '../../../api/links/index';

class LinksPage {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.sort = {
      name: 1
    };
    this.searchText = '';

    this.subscribe('links', () => [{
        sort: this.getReactively('sort')
      }, this.getReactively('searchText')
    ]);

    this.helpers({
      links() {
        return Links.find({}, {
          sort: this.getReactively('sort')
        });
      },
      LinksCount() {
        return Counts.get('numberOfLinks');
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
 
const name = 'linksPage';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  template,
  controllerAs: name,
  controller: LinksPage
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('links', {
      url: '/links',
      template: '<links-page></links-page>'
    });
}