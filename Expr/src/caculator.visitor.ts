import { ExprVisitor } from '../ANTLR/ExprVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import {
  AddSubPhaseContext,
  AssignPhaseContext,
  ExprPhaseContext,
  MulDivPhaseContext,
  ParenPhaseContext,
  IDPhaseContext,
  INTPhaseContext,
} from '../ANTLR/ExprParser'

export class CalculatorVisitor
  extends AbstractParseTreeVisitor<number>
  implements ExprVisitor<number>
{
  private result = 0
  private idValueMap: Map<string, number> = new Map([])

  protected defaultResult(): number {
    return this.result
  }

  visitExprPhase(ctx: ExprPhaseContext) {
    const value = this.visit(ctx.expr())
    console.log(value)
    // 无意义的返回
    return 0
  }

  visitAssignPhase(ctx: AssignPhaseContext) {
    const rightValue = this.visit(ctx.expr())
    this.idValueMap.set(ctx.ID().text, rightValue)
    return rightValue
  }

  visitParenPhase(ctx: ParenPhaseContext) {
    return this.visit(ctx.expr())
  }

  visitMulDivPhase(ctx: MulDivPhaseContext) {
    const [leftExpr, rightExpr] = ctx.expr()
    if (ctx.DIV_SYMBOL()) {
      // 除法
      return this.visit(leftExpr) / this.visit(rightExpr)
    }
    if (ctx.MUL_SYMBOL()) {
      // 乘法
      return this.visit(leftExpr) * this.visit(rightExpr)
    }
  }

  visitAddSubPhase(ctx: AddSubPhaseContext) {
    const [leftExpr, rightExpr] = ctx.expr()
    if (ctx.ADD_SYMBOL()) {
      // 加法
      return this.visit(leftExpr) + this.visit(rightExpr)
    }
    if (ctx.SUB_SYMBOL()) {
      // 减法
      return this.visit(leftExpr) - this.visit(rightExpr)
    }
  }

  visitIDPhase(ctx: IDPhaseContext) {
    const id = ctx.ID().text
    return this.idValueMap.has(id) ? this.idValueMap.get(id) : undefined
  }

  visitINTPhase(ctx: INTPhaseContext) {
    return Number(ctx.INT().text)
  }

  visitClearPhase() {
    this.idValueMap.clear()
    // 无意义的返回
    return 0
  }
}
