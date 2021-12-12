import typescript from 'rollup-plugin-typescript2';
// import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
// import { uglify } from 'rollup-plugin-uglify';

export default {
  input: ['./src/index.tsx'],
  output: [
    {
      file: './lib/umd/index.js',
      name: 'DumboUI',
      format: 'umd',
      sourcemap: true,
    },
    {
      file: './lib/esm/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    less({ insert: true, output: './lib/index.less' }),
    clear({
      targets: ['lib'],
    }),
    // uglify(),
  ],
  external: ['react', 'react-dom'],
};
