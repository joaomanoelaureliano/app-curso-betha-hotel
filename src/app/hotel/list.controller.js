import swal from 'sweetalert2'

export default class ListController {

    constructor(HotelServico, Notification, ReservaServico) {
        this.filterField = 'nome'
        this.filterValue = ''
        this.order = 'nome'
        this.records = []
        this._service = HotelServico
        this._serviceReserva = ReservaServico
        this._notify = Notification
        this.load()
    }

    load() {
        var serviceReserva = this._serviceReserva;
        this._service.findAll(this.filterField, this.filterValue, this.order)
            .then(data => {
                return serviceReserva.findAll(this.filterField, this.filterValue, this.order)
                    .then(dataH => {
                        var result = [];
                        angular.forEach(data, function (dataF) {
                            dataF.quartosReservado = 0;
                            angular.forEach(dataH, function (dataFF) {
                                if (dataFF.hotel.id === dataF.id) {
                                    dataF.quartosReservado++
                                }
                            })
                            result.push(dataF);
                        })
                        this.records = result
                    }).catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }


    excluir(id) {
        swal({
            title: 'Remover registro',
            text: 'Deseja realmente remover o registro',
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then(resp => {
            return resp.value ?
                this._service.remove(id) :
                Promise.reject({ type: 'warning', message: 'Operação cancelada' })
        }).then(response => {
            this.load()
            this._notify.success('Registro excluído com sucesso')
        }).catch(erro => {
            this._notify({ message: erro.message || 'Problemas ao excluir o registro' }, erro.type || 'error')
        })
    }
}

ListController.$inject = ['HotelServico', 'Notification', 'ReservaServico']
