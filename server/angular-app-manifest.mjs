
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-todo-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-todo-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 508, hash: '9a9768714ea786163e0ef448485f7d92c057234115e113641840b86c1e45d30a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: 'adb6011b9d4aa6037fa6c4161fe079669834c5c1fe059f7da61dc06b97e774b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3202, hash: '0c5d6a5823d2a3b87ecd250e6339f4cb110176cda3445e9c43df31d497edd861', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
