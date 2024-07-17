import base from './base.mjs';
import nextPlugin from "@next/eslint-plugin-next";
import { FlatCompat } from '@eslint/eslintrc'
import * as storybookPlugin from "eslint-plugin-storybook";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});


export default [
	...compat.config({
		extends: [
			'plugin:storybook/recommended',
		],
		// .eslintignore is not supported with flat config, make sure to ignore also other build and test folders
		ignorePatterns: ['!.storybook', 'storybook-static'],
	}),
	{
		name: "Storybook",
		plugins: {
			"eslint-plugin-storybook": storybookPlugin,
		},
	},
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
