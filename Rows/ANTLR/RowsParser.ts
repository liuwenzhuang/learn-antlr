// Generated from Rows.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { RowsListener } from "./RowsListener";

export class RowsParser extends Parser {
	public static readonly TAB = 1;
	public static readonly NL = 2;
	public static readonly STUFF = 3;
	public static readonly RULE_file = 0;
	public static readonly RULE_row = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "row",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\t'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TAB", "NL", "STUFF",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RowsParser._LITERAL_NAMES, RowsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RowsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Rows.g4"; }

	// @Override
	public get ruleNames(): string[] { return RowsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RowsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	 // add members to generated RowsParser
	  protected col: number;

	  public setCol(num: number) {
	    this.col = num;
	  }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RowsParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RowsParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 4;
				this.row();
				this.state = 5;
				this.match(RowsParser.NL);
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RowsParser.STUFF);
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
	public row(): RowContext {
		let _localctx: RowContext = new RowContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RowsParser.RULE_row);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 11;
				_localctx._STUFF = this.match(RowsParser.STUFF);

				    _localctx.i++;
				    if ( _localctx.i == this.col ) console.log((_localctx._STUFF != null ? _localctx._STUFF.text : undefined));
				  
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RowsParser.STUFF);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\x14\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x06\x02\n\n\x02\r\x02\x0E" +
		"\x02\v\x03\x03\x03\x03\x06\x03\x10\n\x03\r\x03\x0E\x03\x11\x03\x03\x02" +
		"\x02\x02\x04\x02\x02\x04\x02\x02\x02\x02\x13\x02\t\x03\x02\x02\x02\x04" +
		"\x0F\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07\b\x07\x04\x02\x02\b\n" +
		"\x03\x02\x02\x02\t\x06\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\t\x03\x02" +
		"\x02\x02\v\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x07\x05\x02\x02" +
		"\x0E\x10\b\x03\x01\x02\x0F\r\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11" +
		"\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x05\x03\x02\x02\x02\x04" +
		"\v\x11";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RowsParser.__ATN) {
			RowsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RowsParser._serializedATN));
		}

		return RowsParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public row(): RowContext[];
	public row(i: number): RowContext;
	public row(i?: number): RowContext | RowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowContext);
		} else {
			return this.getRuleContext(i, RowContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RowsParser.NL);
		} else {
			return this.getToken(RowsParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RowsParser.RULE_file; }
	// @Override
	public enterRule(listener: RowsListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: RowsListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	public i: number = 0;
	public _STUFF!: Token;
	public STUFF(): TerminalNode[];
	public STUFF(i: number): TerminalNode;
	public STUFF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RowsParser.STUFF);
		} else {
			return this.getToken(RowsParser.STUFF, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RowsParser.RULE_row; }
	// @Override
	public enterRule(listener: RowsListener): void {
		if (listener.enterRow) {
			listener.enterRow(this);
		}
	}
	// @Override
	public exitRule(listener: RowsListener): void {
		if (listener.exitRow) {
			listener.exitRow(this);
		}
	}
}


