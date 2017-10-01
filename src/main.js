import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


/* Routes */
Vue.use(VueRouter)

const Todo = require('./components/Todo');
const View = require('./components/View');
const Error = require('./components/NotFound');

const routes = [
  { path: '/', component: Todo},
  { name: 'view', path: '/view/:title', component: View},
  { path: '*', component: Error}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
/* Routes end */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
