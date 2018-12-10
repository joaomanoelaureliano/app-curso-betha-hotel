import angular from 'angular';
import uiInputDirective from './ui-input/ui-input.directive';

export default angular.module('diretivas', [])
    .directive('uiInput', uiInputDirective)
    .name;
