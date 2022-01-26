import { createRouter,createWebHashHistory } from "vue-router";
import Garden from "./views/Garden.vue";
import Tree from "./views/Tree.vue";


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/garden"
    },
    {
      path: '/garden',
      name: 'garden',
      component: Garden
    },
    {
      path: '/tree/:treeId',
      name: 'tree',
      component: Tree
    }
  ],
})