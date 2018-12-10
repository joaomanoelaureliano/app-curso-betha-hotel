export default class FormController {

    constructor($stateParams, $state, HospedeServico, Notification) {
        this.record = {}
        this.title = 'Adicionando registro'
        this._service = HospedeServico
        if ($stateParams.id) {
            this.title = 'Editando registro'
            this._service.findById($stateParams.id)
                .then(data => {
                    this.record = data
                })
        }
        this._state = $state
        this._notify = Notification
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Registro salvo com sucesso!')
                this._state.go('hospede.list')
            }).catch(erro => {
                this._notify.error('Erro ao salvar o registro!')
                console.log(erro)
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'HospedeServico', 'Notification']
