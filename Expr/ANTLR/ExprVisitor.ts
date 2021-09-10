// Generated from Expr.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ClearPhaseContext } from "./ExprParser";
import { ExprPhaseContext } from "./ExprParser";
import { AssignPhaseContext } from "./ExprParser";
import { BlankPhaseContext } from "./ExprParser";
import { ParenPhaseContext } from "./ExprParser";
import { MulDivPhaseContext } from "./ExprParser";
import { AddSubPhaseContext } from "./ExprParser";
import { IDPhaseContext } from "./ExprParser";
import { INTPhaseContext } from "./ExprParser";
import { ProgContext } from "./ExprParser";
import { StatContext } from "./ExprParser";
import { ExprContext } from "./ExprParser";
import { ClearContext } from "./ExprParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ExprVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ClearPhase`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClearPhase?: (ctx: ClearPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprPhase`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprPhase?: (ctx: ExprPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignPhase`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignPhase?: (ctx: AssignPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `BlankPhase`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankPhase?: (ctx: BlankPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenPhase`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenPhase?: (ctx: ParenPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulDivPhase`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivPhase?: (ctx: MulDivPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSubPhase`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubPhase?: (ctx: AddSubPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `IDPhase`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIDPhase?: (ctx: IDPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `INTPhase`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitINTPhase?: (ctx: INTPhaseContext) => Result;

	/**
	 * Visit a parse tree produced by `ExprParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ExprParser.clear`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClear?: (ctx: ClearContext) => Result;
}

