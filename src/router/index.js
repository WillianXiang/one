import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Page2 from '@/components/Page2';
import Page1 from '@/components/Page1';
import Info from '@/components/Info';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
        path: 'info', component: Info,
      }],
      meta: {
        keepAlive: true, // 此组件需要被缓存
      },
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      meta: {
        keepAlive: true, // 此组件需要被缓存
      },
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      meta: {
        keepAlive: true, // 此组件需要被缓存
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
