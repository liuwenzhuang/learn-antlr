# 从 Java Class 中分离出 Interface 定义

由于使用的是 antlr4ts，所以针对语法文件要做一些改变：

```g4
// 修改前
@lexer::members {
  protected boolean enumIsKeyword = true;
  protected boolean assertIsKeyword = true;
}

// 修改后
@lexer::members {
  protected enumIsKeyword = true;
  protected assertIsKeyword = true;
}
```

```g4
// 修改前
ENUM:   'enum' {if (!enumIsKeyword) this.setType(Identifier);}
    ;

ASSERT
    :   'assert' {if (!this.assertIsKeyword) this.setType(Identifier);}
    ;

// 修改后
ENUM:   'enum' {if (!this.enumIsKeyword) this.type = JavaLexer.Identifier;}
    ;

ASSERT
    :   'assert' {if (!this.assertIsKeyword) this.type = JavaLexer.Identifier;}
    ;
```
