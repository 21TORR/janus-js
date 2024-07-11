import js from "@eslint/js";

export default [
	js.configs.recommended,
	{
		name: "21TORR Base",
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			ecmaFeatures: {
				jsx: true,
			},
		},
		rules: {
			"no-await-in-loop": "error",
			"no-constructor-return": "error",
			"no-duplicate-imports": "warn",
			"no-self-compare": "error",
			"no-template-curly-in-string": "warn",
			"no-use-before-define": "warn",
			"no-useless-assignment": "warn",

			// region JSDoc
			"jsdoc/check-param-names": ["error", {
				disableMissingParamChecks: true,
			}]
			// endregion
		}
	}
];
