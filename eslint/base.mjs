import js from "@eslint/js";
// import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";
import react from "eslint-plugin-react/configs/recommended.js";
import * as jsXA11y from "eslint-plugin-jsx-a11y";
import tseslint from 'typescript-eslint';

export default [
	js.configs.recommended,
	// jsdoc.configs["flat/recommended"],
	//  └> We don't use the recommended flags, as they include quite a lot of code formatting rules
	jsXA11y.flatConfigs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.strictTypeChecked,
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
			// "no-use-before-define": "error",
			//  └> see below: @typescript-eslint/no-use-before-define
			"no-useless-assignment": "warn",
			// endregion

			// region ESLint: Suggestions
			"block-scoped-var": "error",
			"default-case-last": "warn",
			// "default-param-last": "warn",
			//  └> see below: @typescript-eslint/default-param-last
			"eqeqeq": ["error", "always", {
				"null": "ignore",
			}],
			"max-depth": ["warn", 4],
			// "max-params": ["warn", 5],
			//  └> see below: @typescript-eslint/max-params
			"no-alert": "error",
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

			// region Plugin: TypeScript
			"@typescript-eslint/adjacent-overload-signatures": "error",
			"@typescript-eslint/ban-ts-comment": ["error", {
				"ts-ignore": "allow-with-description",
			}],
			"@typescript-eslint/consistent-type-assertions": ["error", {
				assertionStyle: 'as',
			}],
			"@typescript-eslint/default-param-last": "error",
			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/explicit-member-accessibility": "error",
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/max-params": ["warn", 5],
			"@typescript-eslint/no-array-delete": "error",
			"@typescript-eslint/no-confusing-non-null-assertion": "error",
			"@typescript-eslint/no-empty-object-type": "error",
			"@typescript-eslint/no-loop-func": "error",
			"@typescript-eslint/no-use-before-define": "error",
			"@typescript-eslint/no-useless-empty-export": "error",
			"@typescript-eslint/prefer-find": "warn",
			"@typescript-eslint/prefer-reduce-type-parameter": "warn",
			"@typescript-eslint/prefer-string-starts-ends-with": "warn",
			"@typescript-eslint/require-array-sort-compare": "error",
			"@typescript-eslint/return-await": "error",
			// endregion
		}
	}
];
