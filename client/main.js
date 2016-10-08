import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import { Meteor } from 'meteor/meteor';

import { name as Ils } from '../imports/ui/components/ils/ils';

function onReady() {
  angular.bootstrap(document, [
    Ils
  ], {
    strictDi: true
  });
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}