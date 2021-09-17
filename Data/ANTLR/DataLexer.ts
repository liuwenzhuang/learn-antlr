// Generated from Data.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class DataLexer extends Lexer {
	public static readonly INT = 1;
	public static readonly WS = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"INT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DataLexer._LITERAL_NAMES, DataLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DataLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(DataLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Data.g4"; }

	// @Override
	public get ruleNames(): string[] { return DataLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return DataLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return DataLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return DataLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x04\x13\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x03\x02\x06\x02\t\n\x02\r\x02\x0E\x02\n\x03" +
		"\x03\x06\x03\x0E\n\x03\r\x03\x0E\x03\x0F\x03\x03\x03\x03\x02\x02\x02\x04" +
		"\x03\x02\x03\x05\x02\x04\x03\x02\x04\x03\x022;\x05\x02\v\f\x0F\x0F\"\"" +
		"\x02\x14\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x03\b\x03\x02" +
		"\x02\x02\x05\r\x03\x02\x02\x02\x07\t\t\x02\x02\x02\b\x07\x03\x02\x02\x02" +
		"\t\n\x03\x02\x02\x02\n\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\x04\x03" +
		"\x02\x02\x02\f\x0E\t\x03\x02\x02\r\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02" +
		"\x02\x0F\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x11\x03\x02\x02" +
		"\x02\x11\x12\b\x03\x02\x02\x12\x06\x03\x02\x02\x02\x05\x02\n\x0F\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DataLexer.__ATN) {
			DataLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DataLexer._serializedATN));
		}

		return DataLexer.__ATN;
	}

}

