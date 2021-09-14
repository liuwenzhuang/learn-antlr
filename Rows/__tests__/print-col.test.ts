import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { RowsLexer } from '../ANTLR/RowsLexer'
import { RowsParser } from '../ANTLR/RowsParser'

function setup(text: string, col: number) {
  const charStream = CharStreams.fromString(text)
  const lexer = new RowsLexer(charStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new RowsParser(tokenStream)

  parser.setCol(col)

  parser.buildParseTree = false
  parser.file()
  return parser
}

describe('insert code to grammar', () => {
  const text = `dog	12	bone	
cat	10	noddle
rabbit	8	carrot
`

  let spy
  beforeEach(() => {
    spy = jest.spyOn(globalThis.console, 'log')
  })

  afterEach(() => {
    spy.mockRestore()
  })

  it('print value by col 1', () => {
    setup(text, 1)
    expect(spy).toHaveBeenNthCalledWith(1, 'dog')
    expect(spy).toHaveBeenNthCalledWith(2, 'cat')
    expect(spy).toHaveBeenNthCalledWith(3, 'rabbit')
  })

  it('print value by col 2', () => {
    setup(text, 2)
    expect(spy).toHaveBeenNthCalledWith(1, '12')
    expect(spy).toHaveBeenNthCalledWith(2, '10')
    expect(spy).toHaveBeenNthCalledWith(3, '8')
  })

  it('print value by col 3', () => {
    setup(text, 3)
    expect(spy).toHaveBeenNthCalledWith(1, 'bone')
    expect(spy).toHaveBeenNthCalledWith(2, 'noddle')
    expect(spy).toHaveBeenNthCalledWith(3, 'carrot')
  })
})
