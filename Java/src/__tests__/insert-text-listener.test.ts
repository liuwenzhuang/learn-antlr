import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { InsertSerialUIDListener } from '../insert-text-listener'
import { setup } from './gen-interface-listener.test'

describe('insert serialVersionUID to class', () => {
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
    const listener = new InsertSerialUIDListener(parser)
    walker.walk(listener as ParseTreeListener, parseTree)
    expect(listener.getResult()).toBe(
      `import java.util.List;
import java.util.Map;
public class Demo {
  public static final long serialVersionUID = 1L;

  void f(int x, String y) { }
  int[ ] g(/*no args*/) { return null; }
  List<Map<String, Integer>>[] h() { return null; }
}`
    )
  })
})
