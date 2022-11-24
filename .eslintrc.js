module.exports = {
    extends: "@becode",

    parser: "@babel/eslint-parser",
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        sourceType: "module",
    },
    rules: {},
};
