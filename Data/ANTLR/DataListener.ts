// Generated from Data.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./DataParser";
import { GroupContext } from "./DataParser";
import { SequenceContext } from "./DataParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DataParser`.
 */
export interface DataListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DataParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `DataParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `DataParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `DataParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `DataParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `DataParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;
}

