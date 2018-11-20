import Vue from 'vue';
import vuex from 'vuex';

import home from './moudles/home';

Vue.use(vuex); // 引入某个store对象

export default new vuex.Store({
  modules: {
    home,
  },
});
