// Generated from Data.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { DataListener } from "./DataListener";

export class DataParser extends Parser {
	public static readonly INT = 1;
	public static readonly WS = 2;
	public static readonly RULE_file = 0;
	public static readonly RULE_group = 1;
	public static readonly RULE_sequence = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "group", "sequence",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DataParser._LITERAL_NAMES, DataParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DataParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Data.g4"; }

	// @Override
	public get ruleNames(): string[] { return DataParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DataParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DataParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DataParser.RULE_file);
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
				this.state = 6;
				this.group();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DataParser.INT);
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DataParser.RULE_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			_localctx._INT = this.match(DataParser.INT);
			this.state = 12;
			this.sequence((_localctx._INT != null ? Number(_localctx._INT.text) : 0));
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
	public sequence(n: number): SequenceContext {
		let _localctx: SequenceContext = new SequenceContext(this._ctx, this.state, n);
		this.enterRule(_localctx, 4, DataParser.RULE_sequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 14;
					if (!(_localctx.i<=_localctx.n)) {
						throw this.createFailedPredicateException("$i<=$n");
					}
					this.state = 15;
					this.match(DataParser.INT);
					_localctx.i++;
					}
					}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
			return this.sequence_sempred(_localctx as SequenceContext, predIndex);
		}
		return true;
	}
	private sequence_sempred(_localctx: SequenceContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return _localctx.i<=_localctx.n;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x04\x19\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04\x14\n\x04\f" +
		"\x04\x0E\x04\x17\v\x04\x03\x04\x02\x02\x02\x05\x02\x02\x04\x02\x06\x02" +
		"\x02\x02\x02\x17\x02\t\x03\x02\x02\x02\x04\r\x03\x02\x02\x02\x06\x15\x03" +
		"\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02" +
		"\v\t\x03\x02\x02\x02\v\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x07" +
		"\x03\x02\x02\x0E\x0F\x05\x06\x04\x02\x0F\x05\x03\x02\x02\x02\x10\x11\x06" +
		"\x04\x02\x03\x11\x12\x07\x03\x02\x02\x12\x14\b\x04\x01\x02\x13\x10\x03" +
		"\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03" +
		"\x02\x02\x02\x16\x07\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x04\v\x15";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DataParser.__ATN) {
			DataParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DataParser._serializedATN));
		}

		return DataParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public group(): GroupContext[];
	public group(i: number): GroupContext;
	public group(i?: number): GroupContext | GroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupContext);
		} else {
			return this.getRuleContext(i, GroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DataParser.RULE_file; }
	// @Override
	public enterRule(listener: DataListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: DataListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public _INT!: Token;
	public INT(): TerminalNode { return this.getToken(DataParser.INT, 0); }
	public sequence(): SequenceContext {
		return this.getRuleContext(0, SequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DataParser.RULE_group; }
	// @Override
	public enterRule(listener: DataListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: DataListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	public n: number;
	public i: number = 1;;
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DataParser.INT);
		} else {
			return this.getToken(DataParser.INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, n: number) {
		super(parent, invokingState);
		this.n = n;
	}
	// @Override
	public get ruleIndex(): number { return DataParser.RULE_sequence; }
	// @Override
	public enterRule(listener: DataListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: DataListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
}


