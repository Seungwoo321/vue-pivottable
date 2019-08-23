import Vue from 'vue'
import App from './App.vue'
import VuePivottable from '@/'
import VueDraggable from 'vue-draggable'
// import Sortable from 'vue-sortable'

Vue.config.productionTip = false
Vue.use(VuePivottable)
Vue.use(VueDraggable)
// Vue.sue(Sortable)
new Vue({
  render: h => h(App)
}).$mount('#app')
