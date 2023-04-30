
const Board = { template: '<div>Board</div>' }
const About = { template: '<div>About</div>' }
const User = {
  template: '<div>User</div>',
}

const requireAuth = (to, from, next) => {
  try {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      // check if token is still valid
      const decodedToken = JSON.parse(atob(jwt.split('.')[1]));
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp > currentTime) {
        // user is authorized, allow access to route
        next();
      } else {
        // token is expired, redirect to login page
        next('/login');
      }
    } else {
      // no token found, redirect to login page
      next('/login');
    }
  } catch (e) {
  next('/login');
  }
};

const routes = [
  { path: '/', component: Board, beforeEnter: requireAuth },
  { path: '/about', component: About, beforeEnter: requireAuth },
  { path: '/users/:id', component: User, beforeEnter: requireAuth },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
})
const app = Vue.createApp({})
app.use(router)

app.mount('#app')
