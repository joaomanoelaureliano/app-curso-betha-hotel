import AbstractCrudService from "../abstract.crud.service";

export default class ReservaServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'https://reserva-facil-betha-sistemas.herokuapp.com/api/reserva')
    // super($http, 'http://localhost:8080/api/reservas')
  }

}

ReservaServico.$inject = ['$http']
