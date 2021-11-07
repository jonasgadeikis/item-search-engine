import Vue from 'vue'
import Vuex from 'vuex'
import { ITEM_NAMESPACE } from './modules/item';
import ITEM from './modules/item';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [ITEM_NAMESPACE]: ITEM,
  }
});
