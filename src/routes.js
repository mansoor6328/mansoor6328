import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: 'Home',
    isAuthRequired: true,
  },
  {
    path: '/about',
    component: About,
    title: 'About',
    isAuthRequired: true,
  },
  {
    path: '/contact',
    component: Contact,
    title: 'Contact',
    isAuthRequired: true,
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
    isAuthRequired: false,
  },
  {
    path: '/register',
    component: Register,
    title: 'Register',
    isAuthRequired: false,
  },
  {
    path: '/:id',
    component: Contact,
    title: 'Details',
    isAuthRequired: true,
  },
];

export default routes;
