# PromiseA+
## promise理解
1. promise有三个状态：
    - 成功态（fulfilled）
    - 失败态（rejected)
    - 等待态（pending)
        - 默认状态
    - 状态一旦确定无法更改
        - pending -> fulfilled
        - pending -> rejected
2. 接收一个函数（executor默认执行器）
    - new Promise(executor)时executor会立即执行
    - executor会提供两个可执行参数
        - resolve
        - reject
    - executor执行异常时会直接reject
3. promise必须有一个then方法
    - then方法接受两个函数
        - 第一个成功时执行的回调（onFulfilled）
            - 状态为fulfilled时执行onFulfilled(value)并将resolve执行时传递的值传递过来
        - 第二个失败时执行的回调（onRejected）
            - 状态为onRejected时执行onRejected(reason)并将reject执行时传递的值传递过来
    - then方法执行状态为等待态时，将成功或失败的回调暂存，等待状态确定后再依次执行回调
        - 发布订阅
    - then方法返回的是一个新的promise
    - then方法的成功或者失败不能在当前调用栈被调用所以是一个微任务
    
4. promise 成功和失败回调返回值 可以传递到外传下一个then中
    - return promise时会根据promise状态去确定下一个then的状态
    - 错误状态时当前then没有写错误回调，错误会向下传递
    - 回调内抛出异常出错时，下一个then会是失败态
    - then return的是一个普通值(不论成功还是失败回调)传递到下一个then都是成功态
    




## PromiseA+实现
@[code js](./index.js)
