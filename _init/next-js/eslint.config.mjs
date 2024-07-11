import eslint21TORR from "@21torr/janus/eslit/base";
import * as storybookPlugin from "eslint-plugin-storybook";
import * as nextChecks from "next/core-web-vitals";

export default [
	nextChecks,
	storybookPlugin,
	eslint21TORR,
];
