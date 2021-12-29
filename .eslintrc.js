module.exports = {
    extends: [
        '@vue/typescript'
    ],
    overrides: [
        {
            files: [
                '**/*.ts?(x)',
                '**/*.vue'
            ],
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module'
            }
        }
    ]
};
