import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
import replace from 'rollup-plugin-replace';
// import { uglify } from 'rollup-plugin-uglify';

export default {
  input: ['./src/index.ts'],
  output: [
    {
      file: './lib/umd/dumbooo.js',
      name: 'DumboUI',
      format: 'umd',
      banner: '// welcome to levenx guard',
      sourcemap: true,
    },
    {
      file: './lib/esm/dumbooo.js',
      format: 'es',
      banner: '// welcome to levenx guard',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    babel({
      exclude: 'node_modules/**',
    }),
    less({ output: './lib/index.less' }),
    clear({
      targets: ['lib'],
      // watch: true,
    }),
    // uglify(),
  ],
  external: ['react', 'react-dom'],
};
