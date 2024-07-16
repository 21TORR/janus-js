import base from './base.mjs';
import nextPlugin from "@next/eslint-plugin-next";


export default [
	...base,
	{
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
		},
	},
];
