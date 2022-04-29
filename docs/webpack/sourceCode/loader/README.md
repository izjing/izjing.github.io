##  loader的特点
1. 第一个loader要返回js脚本
2. 每个loader只做一件内容，为了使loader在更多场景链式调用
3. 每一个loader都是一个模块
4. 每个loader都是无状态的，确保loader在不同模块转换之间不保存状态