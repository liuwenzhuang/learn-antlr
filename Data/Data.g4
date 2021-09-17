grammar Data;

file
  : group+
  ;

group
  : INT sequence[$INT.int]
  ;

sequence[number n]
locals [number i = 1;]
  : ( {$i<=$n}? INT {$i++;} )* // match n integers
  ;

INT
  : [0-9]+
  ;

WS
  : [ \t\r\n]+ -> skip
  ;
