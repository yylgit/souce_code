/**
 * mobx相比于redux和vuex都要强大
 * 三者都定义了数据管理规范
 * redux需要开发者实现的东西更多，监听state的变化是通过事件的订阅与发布，
 * vuex中利用了vue的数据驱动很好的和Vue配合使用
 * mobx是自身实现了数据响应式，不仅可以用它做数据管理，还可以做任何数据驱动的事情。
 * 相当于可以灵活的使用 observer对象，watch action computed
 * Reaction
用法: reaction(() => data, (data, reaction) => { sideEffect }, options?)。

autorun 的变种，对于如何追踪 observable 赋予了更细粒度的控制。 它接收两个函数参数，第一个(数据 函数)是用来追踪并返回数据作为第二个函数(效果 函数)的输入。 不同于 autorun 的是当创建时效果 函数不会直接运行，只有在数据表达式首次返回一个新值后才会运行。 在执行 效果 函数时访问的任何 observable 都不会被追踪。

reaction 返回一个清理函数。 传入 reaction 的函数当调用时会接收两个参数，即当前的 reaction，可以用来在执行期间清理 reaction 。

值得注意的是 效果 函数仅对数据函数中访问的数据作出反应，这可能会比实际在效果函数使用的数据要少。 此外，效果 函数只会在表达式返回的数据发生更改时触发。 换句话说: reaction需要你生产 效果 函数中所需要的东西。

reaction 可以实现watch的效果
数据函数追踪变化，效果函数调用watch函数

 */