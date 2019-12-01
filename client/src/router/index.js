import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Ping  from '@/components/Ping';
import Books from '@/components/Books';
import SayHello from '@/components/SayHello';
import Navbar from '@/components/Navbar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SayHello',
      component:  SayHello,
    },
    {
      path: '/Books',
      name: 'Books',
      component:  Books,
    },
    {
      path: '/ping',
      name: 'Ping',
      component:  Ping,
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component:  Navbar,
    },

  ],
  mode: 'history',
});
