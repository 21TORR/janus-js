import nextConfig from "../../eslint/base.mjs";
import {fileURLToPath} from "node:url";
import {join, dirname} from "node:path";


export default [
	...nextConfig,
	{
		name: "Testing",
		languageOptions: {
			parserOptions: {
				project: join(
					dirname(fileURLToPath(import.meta.url)),
					"tsconfig.json",
				),
			},
		},
	},
];
