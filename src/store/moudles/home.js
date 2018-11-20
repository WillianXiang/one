import axios from 'axios';

const state = {
  home_img_arr: [],
};
const getters = {};
const actions = {
  homeInit(context) {
    axios.get('https://lfyfly.github.io/vue-waterfall-easy/demo/static/mock/data.json?group=0')
      .then((res) => {
        /* eslint-disable */
        let temp = [];
        for (let i = 0; i < res.data.length; i += 1) {
          res.data[i].src = 'https://lfyfly.github.io/vue-waterfall-easy/demo/'.concat(res.data[i].src);
          res.data[i].width = 20;
          res.data[i].height = 20;
          // temp.push(res.data[i]);
        }
        /* eslint-disable */
        temp = temp.concat(res.data);
        context.commit({type:'homeInit',data:temp})
      });
  }
};
const mutations = {
  homeInit(state, payload) {
    console.log(state.home_img_arr);
    if (state.home_img_arr.length > 0) {
      state.home_img_arr = state.home_img_arr.concat(payload.data)
    } else {
      state.home_img_arr = payload.data
    }
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
};
