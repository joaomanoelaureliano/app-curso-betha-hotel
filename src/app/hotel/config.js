import ListController from './list.controller'
import FormController from './form.controller'

import HotelServico from './servico'

export const hotelConfig = (modulo) => {

  modulo.service('HotelServico', HotelServico)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
    
      .state('hotel', {
        template: require('@views/default.html'),
        url: '/hotel',
        redirectTo: 'hotel.list'
      })
      .state('hotel.list', {
        template: require('@views/hotel/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('hotel.new', {
        template: require('@views/hotel/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('hotel.edit', {
        template: require('@views/hotel/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
