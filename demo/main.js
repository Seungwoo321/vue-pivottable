import Vue from 'vue'
import App from './App.vue'
import '@/pivottable.css'
// import VuePivottable from '@/'

Vue.config.productionTip = false
// Vue.use(VuePivottable)

new Vue({
  render: h => h(App)
}).$mount('#app')
