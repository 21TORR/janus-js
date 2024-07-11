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
			// region ESLint: Possible Problems
			"no-await-in-loop": "error",
			"no-constructor-return": "error",
			"no-duplicate-imports": "warn",
			"no-self-compare": "error",
			"no-template-curly-in-string": "warn",
			"no-use-before-define": "warn",
			"no-useless-assignment": "warn",
			// endregion

			// region ESLint: Suggestions
			"block-scoped-var": "error",
			"default-case-last": "warn",
			"default-param-last": "warn",
			"eqeqeq": ["error", "always", {
				"null": "ignore",
			}],
			"max-depth": ["warn", 4],
			"max-params": ["warn", 5],
			"no-alert": "error",
			"no-array-constructor": "error",
			"no-bitwise": "warn",
			"no-caller": "warn",
			"no-console": "warn",
			"no-eval": "error",
			"no-extend-native": "error",
			// endregion

			// region ESLint: Layout & Formatting
			"unicode-bom": ["error", "never"],
			// endregion

			// region JSDoc
			"jsdoc/check-param-names": ["error", {
				disableMissingParamChecks: true,
			}]
			// endregion
		}
	}
];
