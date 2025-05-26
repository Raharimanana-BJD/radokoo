import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:prettier/recommended"
  ),
  {
    plugins: ["check-file"],
    rules: {
      "prefer-template": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],

      "check-file/filename-naming-convention": [
        "error",
        {
          "src/**": "KEBAB_CASE",
        },
        {
          ignore: ["src/app/components/ui/*"],
          ignoreMiddleExtension: true,
        },
      ],

      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**": "KEBAB_CASE",
        },
      ],
    },
  },
];
