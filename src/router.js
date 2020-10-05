import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Driver from "./views/driver.vue";
import Mission from "./views/mission.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/driver",
      name: "driver",
      component: Driver
      },
    {
      path: "/mission",
      name: "mission",
      component: Mission
     }
  ]
});
