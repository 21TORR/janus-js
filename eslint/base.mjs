import js from "@eslint/js";
// import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";
import react from "eslint-plugin-react/configs/recommended.js";
import jsXA11y from "eslint-plugin-jsx-a11y";

export default [
	js.configs.recommended,
	// We don't use the recommended flags, as they include quite a lot of
	// code formatting rules
	// jsdoc.configs["flat/recommended"],
	jsXA11y.flatConfigs.recommended,
	react,
	{
		name: "21TORR Base",
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			ecmaFeatures: {
				jsx: true,
			},
		},
		settings: {
			jsdoc: {
				mode: "typescript",
			},
		},
		globals: {
			...globals.browser,
			...globals.es2020,
			...globals["shared-node-browser"],
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

			// region Plugin: JSDoc
			"jsdoc/check-access": "error",
			"jsdoc/check-param-names": ["error", {
				disableMissingParamChecks: true,
			}],
			"jsdoc/check-property-names": "error",
			"jsdoc/check-tag-names": "error",
			"jsdoc/check-types": "error",
			"jsdoc/check-values": "error",
			"jsdoc/empty-tags": "error",
			"jsdoc/implements-on-classes": "error",
			"jsdoc/no-defaults": "error",
			"jsdoc/no-types": "error",
			"jsdoc/require-param-description": "warn",
			"jsdoc/require-param-name": "error",
			"jsdoc/require-param-type": "error",
			"jsdoc/require-property-description": "warn",
			"jsdoc/require-property-name": "error",
			"jsdoc/require-returns-check": "error",
			"jsdoc/require-returns-description": "error",
			"jsdoc/require-yields-check": "error",
			"jsdoc/valid-types": "error",
			// endregion

			// region Plugin: React
			"react/button-has-type": "error",
			"react/jsx-curly-brace-presence": "warn",
			"react/jsx-filename-extension": ["error", {
				extensions: [".jsx", ".tsx"],
			}],
			"react/jsx-no-constructed-context-values": "error",
			"react/jsx-no-leaked-render": "warn",
			"react/jsx-no-script-url": "error",
			"react/jsx-pascal-case": ["error"],
			"react/no-access-state-in-setstate": ["error"],
			"react/no-did-mount-set-state": ["error"],
			"react/no-did-update-set-state": ["error"],
			"react/no-this-in-sfc": "error",
			"react/no-will-update-set-state": "error",
			"react/prefer-es6-class": ["error", "always"],
			"react/prefer-read-only-props": "error",
			"react/style-prop-object": "warn",
			"react/void-dom-elements-no-children": "error",
			// endregion

			// region Plugin: React Hooks
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn"
			// endregion
		}
	}
];
