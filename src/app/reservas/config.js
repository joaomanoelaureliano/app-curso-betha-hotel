import ListController from './list.controller'
import FormController from './form.controller'

import ReservaServico from './servico'

export const reservaConfig = (modulo) => {

  modulo.service('ReservaServico', ReservaServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('reserva', {
        template: require('@views/default.html'),
        url: '/reservas',
        redirectTo: 'reserva.list'
      })
      .state('reserva.list', {
        template: require('@views/reservas/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('reserva.new', {
        template: require('@views/reservas/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('reserva.edit', {
        template: require('@views/reservas/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
