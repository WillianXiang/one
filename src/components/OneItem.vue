<template>
  <el-col>
    <div class="hello" :xs="this.xs?(24/this.xs):24" :sm="this.sm?(24/this.sm):12"
         :md="this.md?(24/this.md):8" :lg="this.lg?(24/this.lg):6" :xl="this.xl?(24/this.xl):6">
      <img v-bind:src=picUrl alt="课程图片" style="width: 100%">
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'OneItem',
  props: ['item', 'xs', 'sm', 'md', 'lg', 'xl'],
  data() {
    return {
      picUrl: '',
    };
  },
  methods: {
  },
  mounted() {
    this.$nextTick(() => {
      this.picUrl = this.item.url;
    });
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
