import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist: []
  },
  mutations: {
    //唯一目的就是修改state中状态
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true;
      state.cartlist.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // state.cartlist.push(payload);
        let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)

        if (oldProduct) {
          // oldProduct.count +=1;
          context.commit('addCounter', oldProduct)
          resolve("+1")
        } else {
          payload.count = 1;
          context.commit('addToCart', payload)
          resolve("ADD")
        }
      })
    }
  },
  modules: {}
})