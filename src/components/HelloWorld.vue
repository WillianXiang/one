<template>
  <vueWaterfallEasy :imgsArr="imgArr" @scrollReachBottom="test" @click="clickFn">
    <!--<div class="img-info" slot-scope="props">-->
      <!--<p class="some-info">picture index: {{props.index}}</p>-->
      <!--<p class="some-info">{{props.value.info}}</p>-->
    <!--</div>-->
  </vueWaterfallEasy>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy';
import Vue from 'vue';
import { mapState } from 'vuex';
import { List } from 'vant';
import OneItem from './Page2';

Vue.use(List);

export default {
  name: 'HelloWorld',
  data() {
    return {
      loading: false,
      finished: false,
      imgsArr: [
        {
          src: 'https://img.yzcdn.cn/vant/vue-cli-demo-201809032000.png',
          href: 'https://www.baidu.com',
          info: '自定义图片信息',
        }],
      group: 0,
    };
  },
  methods: {
    test() {
      this.$store.dispatch('homeInit');
    },
    clickFn(event, { index, value }) {
      // Prevent a tag jump
      event.preventDefault();
      // Do it only when you click on the image
      if (event.target.tagName.toLowerCase() === 'img') {
        console.log('img clicked', index, value);
        if (index % 2 === 0) {
          this.$router.push('/helloWorld/info');
        } else {
          this.$router.push('page2');
        }
      }
    },
  },
  components: {
    OneItem,
    vueWaterfallEasy,
  },
  created() {
    this.test();
  },
  computed: {
    ...mapState({
      imgArr: state => state.home.home_img_arr,
    }),
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
