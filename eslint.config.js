import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginStorybook from "eslint-plugin-storybook";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: true,
        document: true,
        navigator: true,
        console: true,
        HTMLElement: true,
        HTMLDivElement: true,
        SVGSVGElement: true,
        HTMLButtonElement: true,
        __dirname: true,
        module: true,
        require: true,
        process: true,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      storybook: pluginStorybook,
      prettier: prettierPlugin,
    },
    settings: {
      react: { version: "detect" },
    },
    extends: [
      ...pluginReact.configs.recommended.extends,
      ...pluginReactHooks.configs.recommended.extends,
      ...pluginStorybook.configs.recommended.extends,
      "prettier", 
    ],
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginStorybook.configs.recommended.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
];
