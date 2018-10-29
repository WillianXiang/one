<template>
  <div class="hello">
    <one-item v-for="(item, index) in this.pic" :item="item" :key="index"></one-item>
  </div>
</template>

<script>
import OneItem from './OneItem';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      pic: [
        { url: 'https://img.yzcdn.cn/vant/vue-cli-demo-201809032000.png' },
        { url: 'https://img.yzcdn.cn/vant/vue-cli-demo-201809032000.png' }],
    };
  },
  components: {
    OneItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
