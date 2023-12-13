import typescript from "rollup-plugin-typescript2"
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { getPackagesSync } from '@lerna/project'

import vue from 'rollup-plugin-vue'

//获取当前packages目录下的所有package.json
const inputs = getPackagesSync().map(pck=> pck.name).filter(name => name.includes('@muffin-ui'))
export default inputs.map(name => {
    const pckName = name.split('muffin-ui')[1]

    return {
    input: path.resolve(__dirname, `../packages/muffin-ui/index.ts`),
    output: {
      format: 'es',
      file: `lib/${pckName}/index.js`
    },
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false
          },
          exclude: [
            'node_modules',
          ]
        }
      })
    ],
    external(id) {
      return /^vue/.test(id) || /^@muffin-ui/.test(id)
    }
  }
})