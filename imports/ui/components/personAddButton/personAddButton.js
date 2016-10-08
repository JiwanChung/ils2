import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import buttonTemplate from './personAddButton.html';
import modalTemplate from './personAddModal.html';
import { name as PersonAdd } from '../personAdd/personAdd';
 
class PersonAddButton {
  constructor($scope, $reactive, $mdDialog, $mdMedia) {
    'ngInject';
    $reactive(this).attach($scope);
 
    this.$mdDialog = $mdDialog;
    this.$mdMedia = $mdMedia
  }
 
  open(event) {
    this.$mdDialog.show({
      controller($mdDialog) {
        'ngInject';
 
        this.close = () => {
          $mdDialog.hide();
        }
      },
      controllerAs: 'personAddModal',
      template: modalTemplate,
      targetEvent: event,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
    });
  }
}
 
const name = 'personAddButton';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  PersonAdd
]).component(name, {
  template: buttonTemplate,
  controllerAs: name,
  controller: PersonAddButton
});