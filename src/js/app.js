import Vue from 'vue/dist/vue.common.js';
import Vuex from 'vuex';

Vue.use(Vuex);

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



const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return  this.$store.state.count
    }
  }
}


var app = new Vue({
	el: '#root',
	store,
	components: { Counter },
	methods:{
		plus:function(e){
			store.commit('increment')	
		},
		reduce:function(e){
			store.commit('increment')
		}
	},
	template:'<div> <counter></counter> <a v-on:click="plus">+</a><a v-on:click="reduce">-</a> </div>',
})
