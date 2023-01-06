const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/summit2023",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SummitPage.vue") }],
  },
  {
    path: "/summit2020",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/SummitPage2020.vue") },
    ],
  },
  {
    path: "/summit2021",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/SummitPage2021.vue") },
    ],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AboutPage.vue") }],
  },

  {
    path: "/ze",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ZePage.vue") }],
  },
  {
    path: "/p2p",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/P2PLearningPage.vue") },
    ],
  },
  {
    path: "/opportunities",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/OpportunitiesPage.vue") },
    ],
  },
  {
    path: "/labyrinth",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LabyrinthPage.vue") },
    ],
  },
  {
    path: "/faq",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/FaqPage.vue") }],
  },
  {
    path: "/codein",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CodeInPage.vue") }],
  },
  {
    path: "/k4kode",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/KKodePage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
