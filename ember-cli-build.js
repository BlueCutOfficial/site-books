'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { compatBuild } = require('@embroider/compat');

module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');

  const app = new EmberApp(defaults, {
    'ember-math-helpers': {
      only: ['add'],
    },
  });

  return compatBuild(app, buildOnce, {
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    splitAtRoutes: ['livres', 'que-choisir'],
  });
};
