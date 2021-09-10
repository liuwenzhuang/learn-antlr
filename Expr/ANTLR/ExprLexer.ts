// Generated from Expr.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class ExprLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "ID", "INT", "NEWLINE", "WS", "LEFT_PAREN_SYMBOL", 
		"RIGHT_PAREN_SYMBOL", "ADD_SYMBOL", "SUB_SYMBOL", "MUL_SYMBOL", "DIV_SYMBOL",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExprLexer._LITERAL_NAMES, ExprLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExprLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ExprLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Expr.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExprLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExprLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ExprLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ExprLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0FJ\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x06\x05" +
		"-\n\x05\r\x05\x0E\x05.\x03\x06\x06\x062\n\x06\r\x06\x0E\x063\x03\x07\x05" +
		"\x077\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n" +
		"\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x02\x02\x02" +
		"\x0F\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
		"\x03\x02\x05\x05\x02C\\aac|\x03\x022;\x04\x02\v\v\"\"\x02L\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x03\x1D\x03\x02\x02\x02\x05\x1F\x03\x02\x02\x02\x07%\x03\x02" +
		"\x02\x02\t,\x03\x02\x02\x02\v1\x03\x02\x02\x02\r6\x03\x02\x02\x02\x0F" +
		":\x03\x02\x02\x02\x11>\x03\x02\x02\x02\x13@\x03\x02\x02\x02\x15B\x03\x02" +
		"\x02\x02\x17D\x03\x02\x02\x02\x19F\x03\x02\x02\x02\x1BH\x03\x02\x02\x02" +
		"\x1D\x1E\x07?\x02\x02\x1E\x04\x03\x02\x02\x02\x1F \x07e\x02\x02 !\x07" +
		"n\x02\x02!\"\x07g\x02\x02\"#\x07c\x02\x02#$\x07t\x02\x02$\x06\x03\x02" +
		"\x02\x02%&\x07E\x02\x02&\'\x07N\x02\x02\'(\x07G\x02\x02()\x07C\x02\x02" +
		")*\x07T\x02\x02*\b\x03\x02\x02\x02+-\t\x02\x02\x02,+\x03\x02\x02\x02-" +
		".\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\n\x03\x02\x02\x02" +
		"02\t\x03\x02\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x02" +
		"34\x03\x02\x02\x024\f\x03\x02\x02\x0257\x07\x0F\x02\x0265\x03\x02\x02" +
		"\x0267\x03\x02\x02\x0278\x03\x02\x02\x0289\x07\f\x02\x029\x0E\x03\x02" +
		"\x02\x02:;\t\x04\x02\x02;<\x03\x02\x02\x02<=\b\b\x02\x02=\x10\x03\x02" +
		"\x02\x02>?\x07*\x02\x02?\x12\x03\x02\x02\x02@A\x07+\x02\x02A\x14\x03\x02" +
		"\x02\x02BC\x07-\x02\x02C\x16\x03\x02\x02\x02DE\x07/\x02\x02E\x18\x03\x02" +
		"\x02\x02FG\x07,\x02\x02G\x1A\x03\x02\x02\x02HI\x071\x02\x02I\x1C\x03\x02" +
		"\x02\x02\x06\x02.36\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprLexer.__ATN) {
			ExprLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExprLexer._serializedATN));
		}

		return ExprLexer.__ATN;
	}

}

