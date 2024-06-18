// import necessary function form vue-router
import { createRouter, createWebHistory } from "vue-router";

// () => import('path to view's component');  can optimize loading performance.

// declare your routes here
const routes = [
  {
    path: "/:test?",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "首頁",
    },
  },
  {
    path: "/week1",
    name: "Week1",
    component: () => import("../views/Week1View.vue"),
    meta: {
      title: "Week1 Example",
    },
  },
  {
    path: "/week2",
    name: "Week2",
    component: () => import("../views/Week2View.vue"),
    meta: {
      title: "Week2 Example",
    },
    children: [
      {
        path: "first",
        name: "nested-first",
        component: () => import("../views/Week2/ChildrenView1.vue"),
        meta: {
          title: "嵌套路由Example",
        },
      },
      {
        path: "second",
        name: "nested-second",
        component: () => import("../views/Week2/ChildrenView2.vue"),
        meta: {
          title: "嵌套路由Example",
        },
      },
    ],
  },
  {
    path: "/week2",
    name: "Week2",
    component: () => import("../views/Week2View.vue"),
    meta: {
      title: "Week2 Example",
    },
    children: [
      {
        path: "first",
        name: "nested-first",
        component: () => import("../views/Week2/ChildrenView1.vue"),
        meta: {
          title: "嵌套路由Example",
        },
      },
      {
        path: "second",
        name: "nested-second",
        component: () => import("../views/Week2/ChildrenView2.vue"),
        meta: {
          title: "嵌套路由Example",
        },
      },
    ],
  },
  {
    path: "/week3",
    name: "Week3",
    component: () => import("../views/Week3View.vue"),
    meta: {
      title: "Week3 Example",
    },
    redirect: to =>{ return {name: 'CompositionAPI_Example'}},
    children: [
      {
        path: "composition",
        name: "CompositionAPI_Example",
        component: () => import("../views/Week3/CompositionAPI_ExampleView.vue"),
        meta: {
          title: "CompositionAPI Example",
        },
      },
      {
        path: "passvalue",
        name: "PassValue_Example",
        component: () => import("../views/Week3/PassValue_ExampleView.vue"),
        meta: {
          title: "CompositionAPI Example",
        },
      },
    ]
  },
  {
    path: "/week4",
    name: "Week4",
    component: () => import("../views/Week4View.vue"),
    meta: {
      title: "Week4 Example",
    },
    redirect: to =>{ return {name: 'CompositionAPI_Example'}},
    children: [
      {
        path: "axios",
        name: "Axios_Example",
        component: () => import("../views/Week4/Axios_ExampleView.vue"),
        meta: {
          title: "Axios Example",
        },
      },
      {
        path: "pinia",
        name: "Pinia_Example",
        component: () => import("../views/Week4/Pinia_ExampleView.vue"),
        meta: {
          title: "Pinia Example",
        },
      },
      {
        path: "readonly",
        name: "Pinia_Readonly",
        component: () => import("../views/Week4/Pinia_ReadonlyView.vue"),
        meta: {
          title: "Pinia State",
        },
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "嵌套路由Example",
    },
  },
];

// create a router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
// to: destination route
// from: current route
// next: A function that can navigate to destination route.
router.beforeEach((to, from, next) => {
  // we can set title before we change our route.
  window.document.title = to.meta.title;
  // route
  next();
});

export default router;
