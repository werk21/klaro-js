// This is the configuration file for babel
/* eslint-env node */
module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
    ],
    plugins: [
        // Babel 8 moved the old preset-env `useBuiltIns: 'usage'` + `corejs: 3`
        // options into a standalone plugin. `method: 'usage-pure'` matches the
        // old usage-based injection without polluting the global scope.
        ['babel-plugin-polyfill-corejs3', { method: 'usage-pure' }],
    ],
};
