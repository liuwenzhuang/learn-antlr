grammar Expr;

prog
  : stat+
  ;

stat
  : clear NEWLINE        # ClearPhase
  | expr NEWLINE         # ExprPhase
  | ID '=' expr NEWLINE  # AssignPhase
  | NEWLINE              # BlankPhase
  ;

expr
  : '(' expr ')'           # ParenPhase
  | expr ('*' | '/') expr  # MulDivPhase
  | expr ('+' | '-') expr  # AddSubPhase
  | ID                     # IDPhase
  | INT                    # INTPhase
  ;

// 关键字需要定义在 ID 之前，获取更高的优先级
clear
  : 'clear' | 'CLEAR'
  ;

// lexer

ID
  : [a-zA-Z_]+
  ;

INT
  : [0-9]+
  ;

NEWLINE
  : '\r'? '\n'
  ;

WS
  : [ \t] -> skip
  ;

LEFT_PAREN_SYMBOL
  : '('
  ;

RIGHT_PAREN_SYMBOL
  : ')'
  ;

ADD_SYMBOL
  : '+'
  ;

SUB_SYMBOL
  : '-'
  ;

MUL_SYMBOL
  : '*'
  ;

DIV_SYMBOL
  : '/'
  ;
