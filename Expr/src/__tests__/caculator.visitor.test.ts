import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ExprLexer } from '../../ANTLR/ExprLexer'
import { ExprParser } from '../../ANTLR/ExprParser'
import { CalculatorVisitor } from '../caculator.visitor'

function setup(text: string) {
  const charStream = CharStreams.fromString(text)
  const lexer = new ExprLexer(charStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new ExprParser(tokenStream)

  const parseTree = parser.prog()
  return parseTree
}

describe('caculator visitor', () => {
  let spy
  beforeEach(() => {
    spy = jest.spyOn(globalThis.console, 'log')
  })

  afterEach(() => {
    spy.mockRestore()
  })

  it('caculator should print value of expr', () => {
    const parseTree = setup(
      `a = 1
      b = 2
      c = a + b
      a
      b
      c
      1+2*3
      (1+2)*3
      `
    )
    const visitor = new CalculatorVisitor()
    visitor.visit(parseTree)
    expect(spy).toHaveBeenCalledTimes(5)
    expect(spy).toHaveBeenNthCalledWith(4, 7) // 1+2*3 = 7
    expect(spy).toHaveBeenNthCalledWith(5, 9) // (1+2)*3 = 9
  })

  it('clear phase should clear value of identifier', () => {
    const parseTree = setup(
      `a = 1
      b = 2
      a
      b
      clear
      a
      b
      `
    )
    const visitor = new CalculatorVisitor()
    visitor.visit(parseTree)
    expect(spy).toHaveBeenCalledTimes(4)
    // clear 之前
    expect(spy).toHaveBeenNthCalledWith(1, 1) // a
    expect(spy).toHaveBeenNthCalledWith(2, 2) // b
    // clear 之后
    expect(spy).toHaveBeenNthCalledWith(3, undefined)
    expect(spy).toHaveBeenNthCalledWith(4, undefined)
  })
})
