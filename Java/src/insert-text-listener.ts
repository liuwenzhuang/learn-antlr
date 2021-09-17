/**
 * @fileoverview
 * 向 Java Class 中插入 public static final long serialVersionUID = 1L;
 * 以能够使用 java.io.Serializable
 *
 * TokenStreamRewriter 能够在不改变原有 token 流的前提下给出改变后的结果。
 * TokenStreamRewriter 将所有对原 token 流要做的操作推入队列，不会马上执行，
 * 只有当 TokenStreamRewriter.getText() 方法被执行时，在执行队列中的操作
 */

import { TokenStreamRewriter } from 'antlr4ts'
import { JavaListener } from '../ANTLR/JavaListener'
import { ClassBodyContext, JavaParser } from '../ANTLR/JavaParser'

export class InsertSerialUIDListener implements JavaListener {
  private tokenStreamRewriter: TokenStreamRewriter = null

  constructor(parser: JavaParser) {
    this.tokenStreamRewriter = new TokenStreamRewriter(parser.inputStream)
  }

  enterClassBody(ctx: ClassBodyContext) {
    const insertText = '\n  public static final long serialVersionUID = 1L;\n'
    this.tokenStreamRewriter.insertAfter(ctx.start, insertText)
  }

  getResult() {
    // 调用 TokenStreamRewriter 的 getText() 方法时才进行真正的处理逻辑
    return this.tokenStreamRewriter.getText()
  }
}
