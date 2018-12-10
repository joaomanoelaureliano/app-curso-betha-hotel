import ListController from './list.controller'
import FormController from './form.controller'

import HospedeServico from './servico'

export const hospedeConfig = (modulo) => {

  modulo.service('HospedeServico', HospedeServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('hospede', {
        template: require('@views/default.html'),
        url: '/hospedes',
        redirectTo: 'hospede.list'
      })
      .state('hospede.list', {
        template: require('@views/hospedes/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('hospede.new', {
        template: require('@views/hospedes/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('hospede.edit', {
        template: require('@views/hospedes/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
