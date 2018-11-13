<template>
      <!--<vueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="test" @click="clickFn">-->
        <!--&lt;!&ndash;<div class="img-info" slot-scope="props">&ndash;&gt;-->
          <!--&lt;!&ndash;<p class="some-info">picture index: {{props.index}}</p>&ndash;&gt;-->
          <!--&lt;!&ndash;<p class="some-info">{{props.value.info}}</p>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--</vueWaterfallEasy>-->
  <div>
    <div v-for="(item,index) in imgsArr" :key="index" @click="click">
      <img :src="item.src"/>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy';
import axios from 'axios';
import Vue from 'vue';
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
    getData: () => {
      console.log(this.imgsArr);
      if (this.imgsArr) {
        setTimeout(() => {
          // this.list.push(this.list.length + 1);
          this.imgsArr = this.imgsArr.push(this.imgsArr);
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    },
    test() {
      axios.get('https://lfyfly.github.io/vue-waterfall-easy/demo/static/mock/data.json?group=0')
        .then((res) => {
          /* eslint-disable */
          let temp = [];
          for (let i = 0; i < res.data.length; i += 1) {
            res.data[i].src = 'https://lfyfly.github.io/vue-waterfall-easy/demo/'.concat(res.data[i].src);
            // console.log('src', res.data[i].src);
          }
          this.imgsArr = this.imgsArr.concat(res.data);
          // this.group++;
        });
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
    click() {
      this.$router.push('page2');
    }
  },
  components: {
    OneItem,
    vueWaterfallEasy,
  },
  created() {
    this.test();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
