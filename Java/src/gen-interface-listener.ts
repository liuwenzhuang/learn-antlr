/**
 * @fileoverview
 * 保留空格、注释等从 class 中抽离出 interface 定义
 */

import { TokenStream } from 'antlr4ts'
import { JavaListener } from '../ANTLR/JavaListener'
import {
  ClassDeclarationContext,
  ImportDeclarationContext,
  JavaParser,
  MethodDeclarationContext,
} from '../ANTLR/JavaParser'

export class GenInterfaceListener implements JavaListener {
  private result = ''
  private tokenStream: TokenStream = null

  constructor(parser: JavaParser) {
    this.tokenStream = parser.inputStream
  }

  enterImportDeclaration(ctx: ImportDeclarationContext) {
    const importText = this.tokenStream.getText(ctx)
    this.result += `${importText}\n`
  }

  enterClassDeclaration(ctx: ClassDeclarationContext) {
    let temp = 'interface '
    const className = ctx.Identifier().text
    temp += className
    temp += ' {'
    this.result += temp
    this.result += '\n'
  }

  enterMethodDeclaration(ctx: MethodDeclarationContext) {
    let type = 'void'
    if (ctx.type()) {
      type = ctx.type().text
    }
    let temp = `  ${type} `
    temp += ctx.Identifier().text

    const formalParameters = ctx.formalParameters()
    const formalParamsText = this.tokenStream.getText(formalParameters)
    temp += formalParamsText

    temp += ';'
    this.result += temp
    this.result += '\n'
  }

  exitClassDeclaration() {
    this.result += '}'
  }

  getResult() {
    return this.result
  }
}
