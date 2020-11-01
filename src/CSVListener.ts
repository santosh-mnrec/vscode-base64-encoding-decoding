// Generated from CSV.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TextContext } from "./CSVParser";
import { StringContext } from "./CSVParser";
import { EmptyContext } from "./CSVParser";
import { FileContext } from "./CSVParser";
import { HdrContext } from "./CSVParser";
import { RowContext } from "./CSVParser";
import { FieldContext } from "./CSVParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CSVParser`.
 */
export interface CSVListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `text`
	 * labeled alternative in `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by the `text`
	 * labeled alternative in `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by the `string`
	 * labeled alternative in `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `string`
	 * labeled alternative in `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `empty`
	 * labeled alternative in `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	enterEmpty?: (ctx: EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `empty`
	 * labeled alternative in `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	exitEmpty?: (ctx: EmptyContext) => void;

	/**
	 * Enter a parse tree produced by `CSVParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `CSVParser.hdr`.
	 * @param ctx the parse tree
	 */
	enterHdr?: (ctx: HdrContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.hdr`.
	 * @param ctx the parse tree
	 */
	exitHdr?: (ctx: HdrContext) => void;

	/**
	 * Enter a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;

	/**
	 * Enter a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
}

