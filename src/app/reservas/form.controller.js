export default class FormController {

    constructor($stateParams, $state, ReservaServico, Notification, HotelServico, HospedeServico) {
        this.record = {}
        this.title = 'Adicionando registro'
        this._service = ReservaServico
        this._hotelServico = HospedeServico
        this._hospedeServico = HotelServico 
        if ($stateParams.id) {
            this.title = 'Editando registro'
            this._service.findById($stateParams.id)
                .then(data => {
                    this.record = data
                    this.record.dtEntrada = new Date(this.record.dtEntrada)
                    this.record.dtSaida = new Date(this.record.dtSaida)
                 })
        }
        this._state = $state
        this._notify = Notification
        this.getHotel()
        this.getHospede()
    }
    getHotel(){    
        this._hotelServico.findAll()
            .then(data => {
                this.hotel = data
            }).catch(erro => {
                this._notify.error('Erro ao carregar os Hotel!')
            })
    }     
    getHospede(){
        this._hospedeServico.findAll()
            .then(data => {
                this.hospede = data
            }).catch(erro => {
                this._notify.error('Erro ao carregar os Hospedes!')
            })
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Registro salvo com sucesso!')
                this._state.go('reserva.list')
            }).catch(function(){
                this._notify.error('Erro ao salvar o registro!')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'ReservaServico', 'Notification','HospedeServico', 'HotelServico']
