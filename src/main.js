import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Fragment from 'vue-fragment'

library.add(faCopy)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
