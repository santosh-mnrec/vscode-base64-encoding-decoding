// @ts-nocheck
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { CSVLexer } from "./lib/CSVLexer";
import { CSVParser } from "./lib/CSVParser";
import { CsvLoader } from './lib/CsvLoader';
var parse = function (text) {
    try {
        var inputStream = new ANTLRInputStream(text);
        var lexer = new CSVLexer(inputStream);
        var tokens = new CommonTokenStream(lexer);
        var parser = new CSVParser(tokens);
        parser.buildParseTree = true;
        var tree = parser.file();
        var walker = new ParseTreeWalker();
        var loader = new CsvLoader();
        walker.walk(loader, tree);
        var rows = loader.rows;
        return rows;
    }
    catch (error) {
        console.log(error);
        return [];
    }
};
export default parse;
