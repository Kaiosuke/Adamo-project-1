import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    extends: [
      "js/recommended",
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      pluginReact.configs.flat.recommended,
    ],
    rules: {
      // "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-undef": "t",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
