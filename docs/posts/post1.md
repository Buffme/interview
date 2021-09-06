---
title: New 操作符具体做了什么
# picture: /img/xxx.png
permalink: /:regular
lang: zh
date: 2021-04-29 10:20
meta:
  - name: keywords
    content: New 操作符具体做了什么
  - name: description
    content: New 操作符具体做了什么
# tags:
#   -
---

### 先想一下
1. New 一个构造函数之后得到实例对象；
2. 这个实例对象可以访问构造函数中属性，也可以访问构造函数原型链中的属性。

#### 由此可见，New 操作符先创建了一个对象obj，再将对象与构造函数通过原型链连接起来，再将构造函数的this绑定的新建的对象obj上，最后判断函数返回类型是否是对象，是则return函数返回值，否则返回obj。

```js
function New() {

}
```