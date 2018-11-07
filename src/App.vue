<template>
  <div id="app">
    <transition name="bounce">
      <keep-alive>
        <router-view  v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="bounce">
      <router-view  v-if="!$route.meta.keepAlive"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.vue-waterfall-easy-container {
  position: absolute!important;
}
</style>
