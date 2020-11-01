import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { CSVLexer } from "./CSVLexer";
import { CSVParser } from "./CSVParser";
import { Loader } from "./Loader";

const parse = function (text: any) {
  try {
    let inputStream = new ANTLRInputStream(text);
    const lexer = new CSVLexer(inputStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CSVParser(tokens);
    parser.buildParseTree = true;
    const tree = parser.file();

    const walker = new ParseTreeWalker();
    const loader = new Loader();
    walker.walk(loader, tree);

    const rows = loader.rows;
    return rows;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default parse;
