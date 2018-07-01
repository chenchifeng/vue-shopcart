# my-app

> A Vue.js project 基础模版 创建于20180608

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目目录介绍
|-- build : webpack相关的配置文件夹(基本不需要修改)
    |-- dev-server.js : 通过express启动后台服务器
|-- config: webpack相关的配置文件夹(基本不需要修改)
    |-- index.js: 指定的后台服务的端口号和静态资源文件夹
|-- doc: 自己创建的记录和说明项目的文档
|-- node_modules: 依赖包模块
|-- src : 源码文件夹
    |-- components: vue组件及其相关资源文件夹
    |-- app.vue: 应用根主组件
    |-- main.js: 应用入口js
|-- static: 静态资源文件夹
|-- .babelrc: babel的配置文件
|-- .eslintignore: eslint检查忽略的配置
|-- .eslintrc.js: eslint检查的配置
|-- .gitignore: git版本管制忽略的配置
|-- index.html: 主页面文件
|-- package.json: 应用包配置文件
|-- README.md: 应用描述说明的readme文件


