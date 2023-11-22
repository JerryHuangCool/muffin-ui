module.exports = {
  //预设
  presets:[
    "@babel/preset-env",//es6->es5
    "@babel/preset-typescript" //解析ts语法
  ],
  overrides:[{
    test: /\.vue$/,
    plugins: ['@babel/transform-typescript']
  }
  ],
  env: {
    utils: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          {root: 'muffin-ui'}
        ]
      ]
    }
  }

}