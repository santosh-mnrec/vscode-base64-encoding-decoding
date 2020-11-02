// @ts-nocheck

import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { CSVLexer } from "./lib/CSVLexer";
import { CSVParser } from "./lib/CSVParser";
import {CsvLoader} from './lib/CsvLoader';

const parse = function (text: any) {
  try {
    let inputStream = new ANTLRInputStream(text);
    const lexer = new CSVLexer(inputStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CSVParser(tokens);
    parser.buildParseTree = true;
    const tree = parser.file();

    const walker = new ParseTreeWalker();
    const loader = new CsvLoader();
    walker.walk(loader as ParseTreeWalker, tree);

    const rows = loader.rows;
    return rows;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default parse;
