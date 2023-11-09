import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import del from 'rollup-plugin-delete'

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
  }
]
