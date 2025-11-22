import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let configProps = {};
if (process.env.DEPLOY_TARGET == "static") {
	configProps = {
		kit: {
			adapter: adapterStatic({
				fallback: 'index.html'
			}),
			prerender: {
				entries: ['*']
			},
			paths: {
				base: '',
				relative: true,
			},
		},
	}
} else {
	configProps = {
		kit: {
			adapter: adapterNode()
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	...configProps
};

export default config;
