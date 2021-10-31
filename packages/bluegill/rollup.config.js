import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: { client: './src/client/index.ts', server: './src/server/index.ts' },
  output: [
    // {
    //   dir: './lib/',
    //   name: 'DumboUI',
    //   format: 'umd',
    //   banner: '// welcome to levenx guard',
    //   sourcemap: true,
    // },
    {
      dir: './lib/',
      format: 'es',
      banner: '// welcome to levenx guard',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    babel(),
    clear({
      targets: ['lib'],
      // watch: true,
    }),
    // uglify(),
  ],
  external: ['react', 'react-dom'],
};
