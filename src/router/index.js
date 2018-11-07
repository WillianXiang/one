import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Page2 from '@/components/Page2';
import Page1 from '@/components/Page1';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true, // 此组件需要被缓存
      },
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      meta: {
        keepAlive: false, // 此组件需要被缓存
      },
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      meta: {
        keepAlive: false, // 此组件需要被缓存
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log('savedPosition', savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
