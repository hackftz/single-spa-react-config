import { registerApplication } from 'single-spa';
// import { registerApplication, start } from 'single-spa';

registerApplication(
  'react-app',
  () => import('../app/react-app/main.js'),
  location => location.pathname.startsWith('/react-app'),
  { some: 'value' }
);

// start();
