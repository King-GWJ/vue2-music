import Vue from 'vue';
import Vuex from 'vuex';
import{ trackAllApi} from '../base/api/index.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      curSong:[], //当前播放歌曲
      curSongIndex:0, //当前歌曲下标
      a:19723756,
  },
  getters: {
  },
  mutations: {
    
 
  },
  actions: {
    async listApi({ commit, state }, id) {
      try {
        // 调用API，并等待响应
        const response = await trackAllApi();
        // 假设trackAllApi函数返回一个Promise，它将解析为一个包含数据的对象
        console.log(response);
        // API调用成功，提交一个mutation来更新state
        commit('djk', response.data);
      } catch (error) {
        // 处理错误情况
        console.error('Error fetching data:', error);
        // 可以选择提交另一个mutation来更新错误状态，或者做一些其他错误处理
      }
      }
  },
  modules: {
  }
})
