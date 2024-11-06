import base from './base.mjs';
import nextPlugin from "@next/eslint-plugin-next";
import storybook from "eslint-plugin-storybook";


export default [
	...storybook.configs["flat/recommended"],
	{
		name: "Next.js",
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
		},
	},
	...base,
];
