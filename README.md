# 微信小程序demo

css: BEM

js引入Axe框架，只是简单的代理小程序的App和Page函数，引入Event事件和Mixins，
完全不影响小程序自身的框架

WApp --> App

WPage --> Page

> 用法
* WApp()
* WPage()

> 静态方法
* Axe.mixin 全局混合

> 实例api
* on 绑定一个事件
* once 绑定一个一次事件
* off 卸载一个事件
* pause 暂停某个事件
* resume 恢复某个事件
* emit 触发事件
* data 属性代理小程序实例的
* setData 属性代理小程序实例的
* route 属性代理小程序实例的
* onInit 新增的生命周期钩子函数，在小程序实例初始化之前调用
* $bus 所有组件共享的事件对象
* $cxt 每个函数执行的上下文是Axe对象，可以通过$cxt获取小程序自己的执行的上下文

> mixins

全局混合Axe.mixin
主要混入一些全局变量，如store

局部mixins
WPage({
  mixins:[{}]
})
主要是解决模块化

> redux

* $store：每个页面添加$store属性
* mapState：每个页面添加mapState函数选项，用于将redux的属性绑定到当前页面的state上
* state：每个页面添加state属性
* onStateChange：state每次改变会调用，将最新的state返回，每次打开页面都会先调用一次
