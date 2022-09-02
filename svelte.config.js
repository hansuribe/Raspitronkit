

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
//
// 		// Override http methods in the Todo forms
// 		methodOverride: {
// 			allowed: ['PATCH', 'DELETE']
// 		}
// 	}
// };


// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    })
  }
};
