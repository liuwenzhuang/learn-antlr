// Generated from Expr.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExprVisitor } from "./ExprVisitor";


export class ExprParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly ID = 4;
	public static readonly INT = 5;
	public static readonly NEWLINE = 6;
	public static readonly WS = 7;
	public static readonly LEFT_PAREN_SYMBOL = 8;
	public static readonly RIGHT_PAREN_SYMBOL = 9;
	public static readonly ADD_SYMBOL = 10;
	public static readonly SUB_SYMBOL = 11;
	public static readonly MUL_SYMBOL = 12;
	public static readonly DIV_SYMBOL = 13;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_clear = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "expr", "clear",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'clear'", "'CLEAR'", undefined, undefined, undefined, 
		undefined, "'('", "')'", "'+'", "'-'", "'*'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "ID", "INT", "NEWLINE", "WS", 
		"LEFT_PAREN_SYMBOL", "RIGHT_PAREN_SYMBOL", "ADD_SYMBOL", "SUB_SYMBOL", 
		"MUL_SYMBOL", "DIV_SYMBOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExprParser._LITERAL_NAMES, ExprParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExprParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Expr.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExprParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExprParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExprParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExprParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 8;
				this.stat();
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExprParser.T__1) | (1 << ExprParser.T__2) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.NEWLINE) | (1 << ExprParser.LEFT_PAREN_SYMBOL))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ExprParser.RULE_stat);
		try {
			this.state = 25;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new ClearPhaseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 13;
				this.clear();
				this.state = 14;
				this.match(ExprParser.NEWLINE);
				}
				break;

			case 2:
				_localctx = new ExprPhaseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 16;
				this.expr(0);
				this.state = 17;
				this.match(ExprParser.NEWLINE);
				}
				break;

			case 3:
				_localctx = new AssignPhaseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 19;
				this.match(ExprParser.ID);
				this.state = 20;
				this.match(ExprParser.T__0);
				this.state = 21;
				this.expr(0);
				this.state = 22;
				this.match(ExprParser.NEWLINE);
				}
				break;

			case 4:
				_localctx = new BlankPhaseContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 24;
				this.match(ExprParser.NEWLINE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, ExprParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExprParser.LEFT_PAREN_SYMBOL:
				{
				_localctx = new ParenPhaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 28;
				this.match(ExprParser.LEFT_PAREN_SYMBOL);
				this.state = 29;
				this.expr(0);
				this.state = 30;
				this.match(ExprParser.RIGHT_PAREN_SYMBOL);
				}
				break;
			case ExprParser.ID:
				{
				_localctx = new IDPhaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 32;
				this.match(ExprParser.ID);
				}
				break;
			case ExprParser.INT:
				{
				_localctx = new INTPhaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 33;
				this.match(ExprParser.INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 44;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 42;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new MulDivPhaseContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_expr);
						this.state = 36;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 37;
						_la = this._input.LA(1);
						if (!(_la === ExprParser.MUL_SYMBOL || _la === ExprParser.DIV_SYMBOL)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 38;
						this.expr(5);
						}
						break;

					case 2:
						{
						_localctx = new AddSubPhaseContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_expr);
						this.state = 39;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 40;
						_la = this._input.LA(1);
						if (!(_la === ExprParser.ADD_SYMBOL || _la === ExprParser.SUB_SYMBOL)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 41;
						this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clear(): ClearContext {
		let _localctx: ClearContext = new ClearContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ExprParser.RULE_clear);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			_la = this._input.LA(1);
			if (!(_la === ExprParser.T__1 || _la === ExprParser.T__2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x06\x02\f\n\x02" +
		"\r\x02\x0E\x02\r\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04%\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04-\n\x04\f\x04\x0E\x040\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x02\x02\x03\x06\x06\x02\x02\x04\x02\x06\x02\b" +
		"\x02\x02\x05\x03\x02\x0E\x0F\x03\x02\f\r\x03\x02\x04\x05\x027\x02\v\x03" +
		"\x02\x02\x02\x04\x1B\x03\x02\x02\x02\x06$\x03\x02\x02\x02\b1\x03\x02\x02" +
		"\x02\n\f\x05\x04\x03\x02\v\n\x03\x02\x02\x02\f\r\x03\x02\x02\x02\r\v\x03" +
		"\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x03\x03\x02\x02\x02\x0F\x10\x05" +
		"\b\x05\x02\x10\x11\x07\b\x02\x02\x11\x1C\x03\x02\x02\x02\x12\x13\x05\x06" +
		"\x04\x02\x13\x14\x07\b\x02\x02\x14\x1C\x03\x02\x02\x02\x15\x16\x07\x06" +
		"\x02\x02\x16\x17\x07\x03\x02\x02\x17\x18\x05\x06\x04\x02\x18\x19\x07\b" +
		"\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x1C\x07\b\x02\x02\x1B\x0F\x03\x02" +
		"\x02\x02\x1B\x12\x03\x02\x02\x02\x1B\x15\x03\x02\x02\x02\x1B\x1A\x03\x02" +
		"\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\b\x04\x01\x02\x1E\x1F\x07\n\x02" +
		"\x02\x1F \x05\x06\x04\x02 !\x07\v\x02\x02!%\x03\x02\x02\x02\"%\x07\x06" +
		"\x02\x02#%\x07\x07\x02\x02$\x1D\x03\x02\x02\x02$\"\x03\x02\x02\x02$#\x03" +
		"\x02\x02\x02%.\x03\x02\x02\x02&\'\f\x06\x02\x02\'(\t\x02\x02\x02(-\x05" +
		"\x06\x04\x07)*\f\x05\x02\x02*+\t\x03\x02\x02+-\x05\x06\x04\x06,&\x03\x02" +
		"\x02\x02,)\x03\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02" +
		"\x02\x02/\x07\x03\x02\x02\x020.\x03\x02\x02\x0212\t\x04\x02\x022\t\x03" +
		"\x02\x02\x02\x07\r\x1B$,.";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprParser.__ATN) {
			ExprParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExprParser._serializedATN));
		}

		return ExprParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_prog; }
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_stat; }
	public copyFrom(ctx: StatContext): void {
		super.copyFrom(ctx);
	}
}
export class ClearPhaseContext extends StatContext {
	public clear(): ClearContext {
		return this.getRuleContext(0, ClearContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(ExprParser.NEWLINE, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitClearPhase) {
			return visitor.visitClearPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprPhaseContext extends StatContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(ExprParser.NEWLINE, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitExprPhase) {
			return visitor.visitExprPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignPhaseContext extends StatContext {
	public ID(): TerminalNode { return this.getToken(ExprParser.ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(ExprParser.NEWLINE, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAssignPhase) {
			return visitor.visitAssignPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlankPhaseContext extends StatContext {
	public NEWLINE(): TerminalNode { return this.getToken(ExprParser.NEWLINE, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitBlankPhase) {
			return visitor.visitBlankPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenPhaseContext extends ExprContext {
	public LEFT_PAREN_SYMBOL(): TerminalNode { return this.getToken(ExprParser.LEFT_PAREN_SYMBOL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RIGHT_PAREN_SYMBOL(): TerminalNode { return this.getToken(ExprParser.RIGHT_PAREN_SYMBOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitParenPhase) {
			return visitor.visitParenPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivPhaseContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(ExprParser.MUL_SYMBOL, 0); }
	public DIV_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(ExprParser.DIV_SYMBOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitMulDivPhase) {
			return visitor.visitMulDivPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubPhaseContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ADD_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(ExprParser.ADD_SYMBOL, 0); }
	public SUB_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(ExprParser.SUB_SYMBOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAddSubPhase) {
			return visitor.visitAddSubPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IDPhaseContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(ExprParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitIDPhase) {
			return visitor.visitIDPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class INTPhaseContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(ExprParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitINTPhase) {
			return visitor.visitINTPhase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClearContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_clear; }
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitClear) {
			return visitor.visitClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


