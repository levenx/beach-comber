import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './components/index.tsx',
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
    babel(),
    less({ output: './lib/index.less'}),
    clear({
      targets: ['lib'],
      // watch: true,
    }),
    // uglify(),
  ],
  external: ['react', 'react-dom'],
};