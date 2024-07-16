import base from './base.mjs';
import nextPlugin from "@next/eslint-plugin-next";
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat();

export default [
	...base,
	...compat.config({
		extends: [
			'plugin:storybook/recommended',
		],
		// .eslintignore is not supported with flat config, make sure to ignore also other build and test folders
		ignorePatterns: ['!.storybook', 'storybook-static'],
	}),
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
