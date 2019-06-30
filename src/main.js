import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMdl from 'vue-mdl'
import Mdl from 'material-design-lite'

import App from './App.vue'

import Units from './components/views/Units.vue'
import Dashboard from './components/views/Dashboard.vue'
import Lessons from './components/views/Lessons.vue'
import WellDone from './components/views/WellDone.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMdl)

Vue.directive('mdl', {
  inserted: el => Mdl.componentHandler.upgradeElement(el)
})

const routes = [
  { path: '/units', component: Units },
  { path: '/', component: Dashboard },
  { path: '/dashboard', component: Dashboard },
  { path: '/lessons', component: Lessons },
  { path: '/lessons/:unit', component: Lessons },
  { path: '/welldone/:lessonName', component: WellDone },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default app
