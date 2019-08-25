import Vue from 'vue'
import App from './App.vue'
import VuePivottable from '@/'
import VueDraggable from 'vue-draggable'

Vue.config.productionTip = false
Vue.use(VuePivottable)
Vue.use(VueDraggable)

new Vue({
  render: h => h(App)
}).$mount('#app')
