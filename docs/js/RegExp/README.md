# 正则表达式
> 用来处理字符串的规则
> - 只能处理字符串
> - 它是一个规则：可以验证字符串是否符合某个规则（test），
> 
也可以把字符串中符合规则的内容捕获到（exec/match...）

### 一个或多个数字\d和\d+
\d代表0-9的数字
\d+代表匹配多次

```javascript
let str = "good good study , day day up!"
let reg = /\d+/
reg.test(str) // => false

str = '2022-06-16'
reg.exec(str) // => ["2022", index: 0, inputs: "2022-06-16"]
```
