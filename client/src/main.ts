import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
import 'bootstrap/dist/css/bootstrap.min.css';

// https://www.npmjs.com/package/@fortawesome/vue-fontawesome
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
faLibrary.add(faCalendarAlt)
faLibrary.add(faHome)
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
