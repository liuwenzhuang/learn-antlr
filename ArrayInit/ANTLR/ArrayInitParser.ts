// Generated from ./src/ArrayInit.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { ArrayInitListener } from "./ArrayInitListener";
import { ArrayInitVisitor } from "./ArrayInitVisitor";


export class ArrayInitParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly INT = 4;
	public static readonly WS = 5;
	public static readonly RULE_value = 0;
	public static readonly RULE_atom = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"value", "atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "','", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "INT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ArrayInitParser._LITERAL_NAMES, ArrayInitParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ArrayInitParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ArrayInit.g4"; }

	// @Override
	public get ruleNames(): string[] { return ArrayInitParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ArrayInitParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ArrayInitParser._ATN, this);
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ArrayInitParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4;
			this.match(ArrayInitParser.T__0);
			this.state = 5;
			this.atom();
			this.state = 10;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ArrayInitParser.T__1) {
				{
				{
				this.state = 6;
				this.match(ArrayInitParser.T__1);
				this.state = 7;
				this.atom();
				}
				}
				this.state = 12;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 13;
			this.match(ArrayInitParser.T__2);
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ArrayInitParser.RULE_atom);
		try {
			this.state = 17;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ArrayInitParser.INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 15;
				this.match(ArrayInitParser.INT);
				}
				break;
			case ArrayInitParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 16;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07\x16\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\v\n\x02\f" +
		"\x02\x0E\x02\x0E\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\x14\n\x03" +
		"\x03\x03\x02\x02\x02\x04\x02\x02\x04\x02\x02\x02\x02\x15\x02\x06\x03\x02" +
		"\x02\x02\x04\x13\x03\x02\x02\x02\x06\x07\x07\x03\x02\x02\x07\f\x05\x04" +
		"\x03\x02\b\t\x07\x04\x02\x02\t\v\x05\x04\x03\x02\n\b\x03\x02\x02\x02\v" +
		"\x0E\x03\x02\x02\x02\f\n\x03\x02\x02\x02\f\r\x03\x02\x02\x02\r\x0F\x03" +
		"\x02\x02\x02\x0E\f\x03\x02\x02\x02\x0F\x10\x07\x05\x02\x02\x10\x03\x03" +
		"\x02\x02\x02\x11\x14\x07\x06\x02\x02\x12\x14\x05\x02\x02\x02\x13\x11\x03" +
		"\x02\x02\x02\x13\x12\x03\x02\x02\x02\x14\x05\x03\x02\x02\x02\x04\f\x13";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArrayInitParser.__ATN) {
			ArrayInitParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArrayInitParser._serializedATN));
		}

		return ArrayInitParser.__ATN;
	}

}

export class ValueContext extends ParserRuleContext {
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArrayInitParser.RULE_value; }
	// @Override
	public enterRule(listener: ArrayInitListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ArrayInitListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArrayInitVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(ArrayInitParser.INT, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArrayInitParser.RULE_atom; }
	// @Override
	public enterRule(listener: ArrayInitListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ArrayInitListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArrayInitVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


