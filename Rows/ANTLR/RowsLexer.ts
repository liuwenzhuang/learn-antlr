// Generated from Rows.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class RowsLexer extends Lexer {
	public static readonly TAB = 1;
	public static readonly NL = 2;
	public static readonly STUFF = 3;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"TAB", "NL", "STUFF",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\t'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TAB", "NL", "STUFF",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RowsLexer._LITERAL_NAMES, RowsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RowsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(RowsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Rows.g4"; }

	// @Override
	public get ruleNames(): string[] { return RowsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return RowsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return RowsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return RowsLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x17\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x05\x03\x0F\n\x03\x03\x03\x03\x03\x03\x04\x06\x04\x14\n\x04" +
		"\r\x04\x0E\x04\x15\x02\x02\x02\x05\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\x03\x02\x03\x04\x02\v\f\x0F\x0F\x02\x18\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x03\t\x03\x02\x02\x02\x05\x0E" +
		"\x03\x02\x02\x02\x07\x13\x03\x02\x02\x02\t\n\x07\v\x02\x02\n\v\x03\x02" +
		"\x02\x02\v\f\b\x02\x02\x02\f\x04\x03\x02\x02\x02\r\x0F\x07\x0F\x02\x02" +
		"\x0E\r\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02" +
		"\x10\x11\x07\f\x02\x02\x11\x06\x03\x02\x02\x02\x12\x14\n\x02\x02\x02\x13" +
		"\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15" +
		"\x16\x03\x02\x02\x02\x16\b\x03\x02\x02\x02\x05\x02\x0E\x15\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RowsLexer.__ATN) {
			RowsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RowsLexer._serializedATN));
		}

		return RowsLexer.__ATN;
	}

}

