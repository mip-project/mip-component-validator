# mip-components-validator

MIP 组件校验

## Usage

1. 安装

`npm install mip-components-validator`

2. API

```
const validator = require('mip-components-validator');

// 校验一个目录
validator.validate(dirPath).then(function(result) {
    console.log(result.status); // 状态码 0 成功, 1 失败
    console.log(result.errors); // 错误列表
    console.log(result.warns);  // 警告列表
});
```

## 组件校验规则

命名规范

* [MUST] 所有组件必须位于 component 目录下
* [MUST] 所有组件必须以 mip- 开头且以 SFC 形式组织
* 待议：[MUST] 组件目录 `component` 仅允许两层深度，且目录必须以 mip- 开头

template 规范

* [MUST] 沿用页面元素使用规范，但不包括 `<style>` `<script>` `<link>` 的限制
* [MUST] 沿用自定义标签规范
* [MUST] 沿用 HTML 属性规范

CSS 规范

* [MUST] 组件所有样式必须 scoped
* [MUST NOT] 组件样式禁止使用 `position: fixed`
* 待议：[MUST] 组件选择器统一使用 `mip-组件名` 

JS 规范

1. 组件 js
2. common js
3. 第三方 js


## TODO

- 补充 JS 校验规则
- 补充测试用例
- 支持校验压缩包
- 显示错误代码行数