grammar Rows;
@parser::members { // add members to generated RowsParser
  protected col: number;

  public setCol(num: number) {
    this.col = num;
  }
}

file: (row NL)+ ;

row
locals [number i=0]
  : ( STUFF
  {
    $i++;
    if ( $i == this.col ) console.log($STUFF.text);
  }
  )+
  ;

TAB : '\t' -> skip ; // match but don't pass to the parser

NL : '\r'? '\n' ; // match and pass to the parser

STUFF: ~[\t\r\n]+ ; // match any chars except tab, newline
