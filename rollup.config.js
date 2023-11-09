import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import del from 'rollup-plugin-delete'
import commonjs from "@rollup/plugin-commonjs"
import babel from '@rollup/plugin-babel'

export default [
  {
    input: './index.ts',
    output: {
      file: 'dist/life/number-to-bdt.js',
      format: 'iife',
      name: 'numberToBDT'
    },
    plugins: [
      del({
        targets: [ './dist/*' ]
      }),
      typescript({ module: 'esnext' }),
      terser()
    ]
  },
  {
    input: './index.ts',
    output: [
        {
          dir: 'dist/cjs',
          format: 'cjs',
          preserveModules: true,
          exports: 'auto'
        },
        {
          dir: 'dist/esm',
          format: 'es',
          preserveModules: true,
          exports: 'auto'
        }
    ],
    plugins: [
      del({ targets: [ 'dist/cjs', 'dist/esm'] }),
      typescript({ module: 'esnext' }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        plugins: [ '@babel/plugin-transform-runtime' ]
      }),
      terser()
    ]
  }
]
