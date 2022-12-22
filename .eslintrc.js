/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/standard', // @vue/eslint-config-standard
        '@vue/typescript/recommended',
        'plugin:vue/essential'
    ],
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended']
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        quotes: ['error', 'single'],
        indent: ['error', 4],
        camelcase: 'off',
        'vue/no-v-model-argument': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'vue/html-indent': ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'prefer-const': 'off',
        'space-before-function-paren': 'off',
        'no-use-before-define': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
    }
}
