// Generated from Rows.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./RowsParser";
import { RowContext } from "./RowsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RowsParser`.
 */
export interface RowsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RowsParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `RowsParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `RowsParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `RowsParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;
}

