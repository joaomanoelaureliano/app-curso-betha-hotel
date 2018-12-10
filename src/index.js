import { appModule } from './app/main.module';

require('bootstrap');
import './style.scss';

angular.bootstrap(document.body, [appModule], { strictDi: true });
