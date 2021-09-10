// Generated from ./src/ArrayInit.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ValueContext } from "./ArrayInitParser";
import { AtomContext } from "./ArrayInitParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ArrayInitParser`.
 */
export interface ArrayInitListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ArrayInitParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ArrayInitParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `ArrayInitParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ArrayInitParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}

