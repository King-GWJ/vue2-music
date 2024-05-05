import Vue from 'vue';
import Vuex from 'vuex';
import{ trackAllApi} from '../base/api/index.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      curSong:[], //当前播放歌曲
      curSongIndex:0, //当前歌曲下标
      typeId:111, // 榜单id
  },
  getters: {
  },
  mutations: {
    // 榜单ID
    leaderboard(state,payload){
      state.typeId = payload
    }
 
  },
  actions: {
    
  },
  modules: {
  }
})
