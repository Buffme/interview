---
title: Promise 对象
# picture: /img/xxx.png
permalink: /:regular
lang: zh
date: 2021-04-29 10:20
meta:
  - name: keywords
    content: Promise 对象
  - name: description
    content: Promise 对象
# tags:
#   -
---

### Promise 对象
1. Promise 的出现主要是解决回调地狱的问题。它相当一个容器，保存着异步操作的结果。
2. Promise 对象有三种状态：pending，fulfilled，rejected。只有异步操作的结果可以决定当前是哪一种状态。且一旦状态发生改变，就不会再变了，如果想得到这个结果，可以设置回调函数。

#### Promise 一旦新建了，就会立即执行，无法中途取消；如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部；当处于pending 状态时，无法得知目前是刚刚开始还是即将完成。

1. 想要创建一个Promise 对象，可以使用 new 来调用 Promise 的构造器来进行实例化:

```js
const promise = new Promise(function(resolve, reject) {
  // 异步处理
  // 处理结束后、调用resolve 或 reject
});
```