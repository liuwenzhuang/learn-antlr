# Semantic Predicates

## 场景

```ts
2 9 10 3 1 2 3
```

第一个数字 2 表示匹配后面 2 个数字，即 9 和 10。随后的 3 表示匹配后面 3 个数字，即 1、2 和 3。需要能够定义一个语法文件，通过生成的 Parser、Visitor 等正确解析类似上面的数据：

```bash
# Data.g4 为语法文件名
antlr4 -no-listener Data.g4
javac Data*.java
# t.data 内存放的是类似上面的数字序列
grun Data file -tree t.data

# 预期输出
(file (group 2 (sequence 9 10)) (group 3 (sequence 1 2 3)))
```
