import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { ArrayInitLexer } from '../../ANTLR/ArrayInitLexer'
import { ArrayInitParser } from '../../ANTLR/ArrayInitParser'
import FlattenListener from '../FlattenListener'

function setup(text: string) {
  const charStream = CharStreams.fromString(text)
  const lexer = new ArrayInitLexer(charStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new ArrayInitParser(tokenStream)

  const parseTree = parser.value()
  return parseTree
}

describe('FlattenListener', () => {
  it('FlattenListener could flatten nested array', () => {
    const listener = new FlattenListener()
    const walker = new ParseTreeWalker()
    // => {1, 2, 3, 4, 5, 6, 7, 8}
    const parseTree = setup('{1, 2, 3, {4, 5, {6}, 7}, 8}')
    walker.walk(listener as ParseTreeListener, parseTree)
    expect(listener.getResult()).toBe('{1, 2, 3, 4, 5, 6, 7, 8}')
  })
})
