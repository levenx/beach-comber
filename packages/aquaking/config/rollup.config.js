import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import path from 'path';
import pkg from '../package.json';
const getPath = (_path) => path.resolve(__dirname, _path);

const extensions = ['.js', '.ts', '.tsx'];

const tsPlugin = ts({
    tsconfig: getPath('../tsconfig.json'), // 导入本地ts配置
    extensions,
});

const clearPlugin = clear({
    targets: ['es'],
});

export default {
    input: 'src/index.ts', //入口
    // 是否开启代码分割
    experimentalCodeSplitting: true,
    output: [
        {
            file: './lib/umd/index.js',
            name: 'AquaKing',
            format: 'umd',
        },
        {
            file: './lib/esm/index.js',
            format: 'es',
        },
    ],
    watch: {
        include: 'src/**',
        clearScreen: true,
    },
    plugins: [
        tsPlugin,
        replace({
            SDK_VERSION: JSON.stringify(pkg.version)
        }),
        commonjs({ extensions: ['.ts', '.js'] }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        clearPlugin,
        livereload({ watch: ['dist', 'public'], delay: 300, }),
        serve({ contentBase: ['public', 'lib'], host: 'localhost', port: 4000 })
    ],
};
