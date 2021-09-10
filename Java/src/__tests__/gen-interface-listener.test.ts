import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { JavaLexer } from '../../ANTLR/JavaLexer'
import { CompilationUnitContext, JavaParser } from '../../ANTLR/JavaParser'
import { GenInterfaceListener } from '../gen-interface-listener'

function setup(text: string): [JavaParser, CompilationUnitContext] {
  const charStream = CharStreams.fromString(text)
  const lexer = new JavaLexer(charStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new JavaParser(tokenStream)

  const parseTree = parser.compilationUnit()
  return [parser, parseTree]
}

describe('gen interface listener', () => {
  let spy
  beforeEach(() => {
    spy = jest.spyOn(globalThis.console, 'log')
  })

  afterEach(() => {
    spy.mockRestore()
  })

  it('gen interface from Java Code', () => {
    const walker = new ParseTreeWalker()
    const [parser, parseTree] = setup(
      `import java.util.List;
      import java.util.Map;
      public class Demo {
      void f(int x, String y) { }
      int[ ] g(/*no args*/) { return null; }
      List<Map<String, Integer>>[] h() { return null; }
      }`
    )
    const listener = new GenInterfaceListener(parser)
    walker.walk(
      listener as ParseTreeListener,
      parseTree
    )
    expect(listener.getResult()).toBe(
      `import java.util.List;
import java.util.Map;
interface Demo {
  void f(int x, String y);
  int[] g(/*no args*/);
  List<Map<String,Integer>>[] h();
}`
    )
  })
})
