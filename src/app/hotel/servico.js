import AbstractCrudService from "../abstract.crud.service";

export default class HotelServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'https://reserva-facil-betha-sistemas.herokuapp.com/api/hotel')
    // super($http, 'http://localhost:8080/api/hotel')
  }

}

HotelServico.$inject = ['$http']
