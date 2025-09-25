const path = require('path');

module.exports = [
    // CommonJS 格式配置
    {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.cjs.js',
            library: {
                type: 'commonjs2'
            }
        },
        mode: 'production'
    },

    // ESM 格式配置
    {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.esm.js',
            library: {
                type: 'module'
            }
        },
        experiments: {
            outputModule: true
        },
        mode: 'production'
    },

    // UMD 格式配置
    {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.umd.js',
            library: {
                name: 'MyLibrary',
                type: 'umd',
                export: 'default'
            }
        },
        mode: 'production'
    }
];