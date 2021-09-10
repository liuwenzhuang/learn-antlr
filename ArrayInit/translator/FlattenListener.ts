import { ArrayInitListener } from '../ANTLR/ArrayInitListener'
import { AtomContext, ValueContext } from '../ANTLR/ArrayInitParser'

export default class FlattenListener implements ArrayInitListener {
  private result: string = ''

  enterValue(ctx: ValueContext) {
    if (!ctx.parent) {
      // 顶层的 { 保留
      this.result += '{'
    }
  }

  exitValue(ctx: ValueContext) {
    if (!ctx.parent) {
      // 顶层的 } 保留
      this.result += '}'
    }
  }

  enterAtom(ctx: AtomContext) {
    if (ctx.INT()) {
      const intValue = ctx.INT().text
      if (this.result.endsWith('{')) {
        this.result += intValue
      } else {
        this.result += `, ${intValue}`
      }
    }
  }

  getResult() {
    return this.result
  }

  clearResult() {
    this.result = ''
  }
}
