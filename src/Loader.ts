import { CSVParser } from "./CSVParser";
import { CSVListener } from "./CSVListener";
import { TextContext } from "./CSVParser";
import { StringContext } from "./CSVParser";
import { EmptyContext } from "./CSVParser";
import { FileContext } from "./CSVParser";
import { HdrContext } from "./CSVParser";
import { RowContext } from "./CSVParser";
import { FieldContext } from "./CSVParser";
/* tslint:disable */ 
const EMPTY = "";

export class Loader implements CSVListener {
  rows=[];
  header=null;
  currentRowFieldValue= null;
 constructor(){
    /** Load a list of row maps that map field name to value */
  this.rows = [];
  /** List of column names */
  this.header = null;
  /** Build up a list of fields in current row */
  this.currentRowFieldValues = null;
 }

  exitHdr(ctx:HdrContext) {
    this.header = this.currentRowFieldValues?.slice();
  }

  enterRow(ctx:RowContext) {
    this.currentRowFieldValues = [];
  }

  exitRow(ctx:RowContext) {
    // If this is the header row, do nothing
    if (ctx.parent instanceof HdrContext) {
      return;
    }
    // It's a data row
    var m = {};
    this.currentRowFieldValues.forEach((value: any, column: string | number) => {
      m[this.header[column]] = value;
    });
    this.rows.push(m);
  }

  exitString(ctx:StringContext) {
    this.currentRowFieldValues.push(ctx.STRING().text);
  }

  exitText(ctx: TextContext) {
    this.currentRowFieldValues.push(ctx.TEXT().text);
  }

  exitEmpty(ctx:EmptyContext) {
    this.currentRowFieldValues.push(EMPTY);
  }
}
