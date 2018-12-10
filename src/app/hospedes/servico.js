import AbstractCrudService from "../abstract.crud.service";

export default class HospedeServico extends AbstractCrudService {

  constructor($http) {
    super($http, 'https://reserva-facil-betha-sistemas.herokuapp.com/api/hospede')
    // super($http, 'http://localhost:8080/api/hospedes')
  }

}

HospedeServico.$inject = ['$http']
