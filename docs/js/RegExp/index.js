let str = "good good study , day day up!"
let reg = /\b([a-z])([a-z]*)\b/g
str = str.replace(reg, (...arg) => {
    let [, $1, $2] = arg;
    let str = ($1.toUpperCase()) + $2
    return str

})
console.log(str)