import * as angular from 'angular'

import { default as uiRouter } from '@uirouter/angularjs'
import diretivas from './diretivas';
import { default as uiNotification } from 'angular-ui-notification'
import { default as inputMasks } from 'angular-input-masks'
import { default as flatpickr } from 'ng-flatpickr'
import { mainConfig } from './main/config'
import { hospedeConfig } from './hospedes/config'
import { hotelConfig } from './hotel/config'
import { reservaConfig } from './reservas/config'

require('angular-i18n/angular-locale_pt-br.js')

export const appModule = 'app'

var modulo = angular.module(appModule, [uiRouter, uiNotification, inputMasks, flatpickr.name, diretivas])

modulo.config(mainConfig(modulo))
      .config(hospedeConfig(modulo))
      .config(hotelConfig(modulo))
      .config(reservaConfig(modulo))
