import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const plugins = [
  typescript({
    tsconfig: './tsconfig.build.json',
  }),
  terser(),
];

export default [
  {
    input: 'src/index.es.ts',
    output: {
      file: 'dist/index.es.js',
      format: 'es',
    },
    plugins,
  },
  {
    input: 'src/index.cjs.ts',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    plugins,
  },
];
