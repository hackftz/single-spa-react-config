import { registerApplication } from 'single-spa';
console.log(3333);
registerApplication(
  'react-app',
  () => import('../app/react-app/main.js'),
  location => location.pathname.startsWith('/react-app'),
  { some: 'value' }
);
