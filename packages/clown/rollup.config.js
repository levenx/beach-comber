import typescript from 'rollup-plugin-typescript2';
// import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.tsx',
  output: [
    {
      file: './lib/umd/index.js',
      name: 'ClownArticle',
      format: 'umd',
      banner: '// welcome to levenx guard',
      sourcemap: true,
    },
    {
      file: './lib/esm/index.js',
      format: 'es',
      banner: '// welcome to levenx guard',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    resolve(),
    commonjs({
      'namedExports': {
        'node_modules/react-is/index.js': ['isFragment'],
        'node_modules/react/index.js': ['Fragment', 'cloneElement', 'isValidElement', 'Children', 'createContext', 'Component', 'useRef', 'useImperativeHandle', 'forwardRef', 'useState', 'useEffect', 'useMemo'],
        'node_modules/react-dom/index.js': ['render', 'unmountComponentAtNode', 'findDOMNode'],
        'node_modules/gojs/release/go.js': ['Diagram', 'GraphLinksModel', 'Overview', 'Spot']
      }
    }),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    less({
      insert: true,
    }),
    clear({
      targets: ['lib'],
      // watch: true,
    }),
    // uglify(),
  ],
  external: ['react', 'react-dom'],
};