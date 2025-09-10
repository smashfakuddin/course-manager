import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused vars warnings
      "@typescript-eslint/no-unused-vars": "off",

      // Allow use of 'any' type
      "@typescript-eslint/no-explicit-any": "off",

      // Disable React hooks rules (not recommended unless necessary)
      "react-hooks/rules-of-hooks": "off",

      // Disable React hook dependency warnings (optional)
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
