import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngFileUpload from 'ng-file-upload';
 
import { Meteor } from 'meteor/meteor';
 
import template from './personUpload.html';
import { upload } from '../../../api/images';
 
class PersonUpload {}
 
const name = 'personUpload';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  ngFileUpload
]).component(name, {
  template,
  controllerAs: name,
  controller: PersonUpload
});