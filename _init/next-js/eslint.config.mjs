import eslint21TORR from "@21torr/janus/eslint/next-js.mjs";
import * as storybookPlugin from "eslint-plugin-storybook";

import {fileURLToPath} from "node:url";
import {join, dirname} from "node:path";

export default [
	storybookPlugin,
	...eslint21TORR,
	{
		languageOptions: {
			parserOptions: {
				project: join(
					dirname(fileURLToPath(import.meta.url)),
					"tsconfig.json",
				),
			},
		},
	}
];
