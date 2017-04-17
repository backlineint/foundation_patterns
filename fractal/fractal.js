'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Foundation Patterns');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.components.engine('@frctl/twig'); // use Twig for components
fractal.components.set('ext', '.twig'); // use .twig file extension

const mandelbrot = require('@frctl/mandelbrot');

// Customize theme configuration
const myCustomisedTheme = mandelbrot({
  "nav": ["docs", "components"] // show docs above components in the sidebar
});

fractal.web.theme(myCustomisedTheme);

// This will need to be updated as we start including js
fractal.web.set('static.path', '../css');
