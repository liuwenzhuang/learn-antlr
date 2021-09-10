grammar ArrayInit;

value
  : '{' atom (',' atom)* '}'
  ;

atom
  : INT
  | value
  ;

// { 1, 2, { 3, 4 }, 5 }
INT
  : '0'
  | [1-9][0-9]*
  ;

WS
  : [ \t\n\r] -> channel(HIDDEN)
  ;
