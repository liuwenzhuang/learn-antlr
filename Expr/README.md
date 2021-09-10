# 实现简单的计算功能

- 对于语法规则中的多个分支，可以为他们增加标签，以便在 vistor 或 listener 中能够区分出他们，做相应的处理。
  ```g4
  stat
  : expr NEWLINE         # ExprPhase
  | ID '=' expr NEWLINE  # AssignPhase
  | NEWLINE              # BlankPhase
  ;
  ```
