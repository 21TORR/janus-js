import eslint21TORR from "@21torr/janus/eslit/base";
import * as storybookPlugin from "eslint-plugin-storybook";
import * as nextChecks from "next/core-web-vitals";
import {fileURLToPath} from "node:url";
import {join, dirname} from "node:path";

export default [
	nextChecks,
	storybookPlugin,
	eslint21TORR,
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
