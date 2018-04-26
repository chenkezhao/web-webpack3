# antd-mobile with webpack

basic proj demo with webpack@2 and tree-shaking

### Install & Start

```shell
npm i  # npm i --save-dev webpack@2 webpack-dev-server@2 extract-text-webpack-plugin
npm start
```

open http://localhost:8000/

### Build

```sh
npm run build  # then see dist dir
# Note: you should remove `webpack-visualizer-plugin / webpack-bundle-analyzer` code in webpack.config.js file for production environment.
```

bundle analyzer tools:
[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) /
[webpack-visualizer-plugin](https://www.npmjs.com/package/webpack-visualizer-plugin)
(Note: [just for dist bundle file analyse](https://github.com/th0r/webpack-bundle-analyzer/issues/86))


# 大神们，请教个问题
antd-m，react-router，用hashHistory.goBack()多次（多次试验大概是3次）重复回退打开摄像头，摄像头就会卡住。

如果是  hashHistory.push()并不会出现这种情况。

使用的插件：https://github.com/mozmorris/react-webcam/blob/master/src/react-webcam.js

push和goBack难道有什么不同吗？

求大神们指点...

DEMO效果：
![示例1](https://github.com/chenkezhao/web-webpack3/blob/master/doc/1.png)
![示例2](https://github.com/chenkezhao/web-webpack3/blob/master/doc/2.png)
![示例3](https://github.com/chenkezhao/web-webpack3/blob/master/doc/3.png)
