import { registerApplication } from 'single-spa';
// import { registerApplication, start } from 'single-spa';

// registerApplication(
//   'react-app',
//   () => import('../app/react-app/main.js'),
//   location => location.pathname.startsWith('/react-app'),
//   { some: 'value' }
// );

// registerApplication(
//   'react-func-virtualized',
//   () => import('/Users/fanta/Desktop/projects/func-virtualized/single-spa-root.js'),
//   location => location.pathname.startsWith('/react-func-virtualized'),
//   { some: 'value' }
// );

registerApplication(
  'react-ts-test',
  () => import('/Users/fanta/Desktop/test/react-ts-test/single-spa-root.js'),
  location => location.pathname.startsWith('/react-ts-test'),
  { some: 'value' }
);

// start();
