import { createStore } from 'vuex'
import ghibli from './modules/ghibli'

export default createStore({
  modules: {
    ghibli,
  },
})