# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```
  @/const/vue.json 全局变量
  @/store/interfaces 将接口绑定到 vuex.actions，名称为 @/api 中的对应值
  @/store/types 定义除接口外的 vuex 名称
  @/api 接口（使用大写常量进行导出）
```