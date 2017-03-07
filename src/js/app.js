import Vue from 'vue/dist/vue.common.js';
import Vuex from 'vuex';
import VueRouter from 'vue-router'


Vue.use(VueRouter);
Vue.use(Vuex);



const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return  this.$store.state.count
    }
  }
}

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Index = { template: '<div>11111111111111111</div>' }


const routes = [
  { path: '/', component: Index },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})




var app = new Vue({
	store,
	router,
	template:'<div><p><router-link to="/">Index</router-link> <router-link to="/foo">Go to Foo</router-link><router-link to="/bar">Go to Bar</router-link></p><router-view></router-view></div>'
}).$mount('#root')
