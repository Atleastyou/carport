# 这是一份说明，说不说得明白我不管

## 冲
```
npm install

微信开发者工具-左上角工具栏-构建npm

微信开发者工具-右上角详情-勾选<ES6转ES5><增强编译>
```

## 目录结构 ##

	|-- api                              // 接口封装
	|-- components                       // 所有组件
	|-- miniprogram_npm                  // npm包编译后的文件夹，点击构建npm后生成，要引入安装的npm包需生成此文件夹
	|-- pages                            // 所有页面
	|-- router                           // 路由列表，封装的路由依赖此文件
	|-- utils                            // 组件
    |--fetch                           // 请求封装
    |--utils                           // 实用方法
	|-- app.js                           // 入口
	|-- .gitignore                       // git忽略文件
	|-- project.config.json              // 项目配置文件
	|-- package.json                     // npm包信息
	|-- README.md                        // 说明


### 插件

1.全部api promise化 => https://developers.weixin.qq.com/miniprogram/dev/extended/utils/api-promise.html
2.自定义导航栏 => https://github.com/lingxiaoyi/navigation-bar
3.路由封装 => https://github.com/microJ/wx-nav/blob/master/README.zh_cn.md
4.七牛上传 => https://github.com/gpake/qiniu-wxapp-sdk