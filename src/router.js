import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import SingleProject from './views/SingleProject.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      children: [
        {
          path: ':project',
          name: 'project',
          component: SingleProject,
        }
      ],
    },
  ],
});
