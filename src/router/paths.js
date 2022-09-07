export default [
  {
    path: '/',
    menu: false,
    name: 'Home',
    component: () => import(`@/pages/Index`)
  },
  {
    path: '/login',
    menu: false,
    name: 'Login',
    meta:{
      route:'login'
    },
    component: () => import(`@/pages/Auth/Login`)
  }
]
