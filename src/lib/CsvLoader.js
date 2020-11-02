import { HdrContext } from "./CSVParser";
/* tslint:disable */
var EMPTY = "";
var CsvLoader = /** @class */ (function () {
    function CsvLoader() {
        this.rows = [];
        this.header = null;
        this.currentRowFieldValue = null;
        /** Load a list of row maps that map field name to value */
        this.rows = [];
        /** List of column names */
        this.header = null;
        /** Build up a list of fields in current row */
        this.currentRowFieldValues = null;
    }
    CsvLoader.prototype.exitHdr = function (ctx) {
        var _a;
        this.header = (_a = this.currentRowFieldValues) === null || _a === void 0 ? void 0 : _a.slice();
    };
    CsvLoader.prototype.enterRow = function (ctx) {
        this.currentRowFieldValues = [];
    };
    CsvLoader.prototype.exitRow = function (ctx) {
        var _this = this;
        // If this is the header row, do nothing
        if (ctx.parent instanceof HdrContext) {
            return;
        }
        // It's a data row
        var m = {};
        this.currentRowFieldValues.forEach(function (value, column) {
            m[_this.header[column]] = value;
        });
        this.rows.push(m);
    };
    CsvLoader.prototype.exitString = function (ctx) {
        this.currentRowFieldValues.push(ctx.STRING().text);
    };
    CsvLoader.prototype.exitText = function (ctx) {
        this.currentRowFieldValues.push(ctx.TEXT().text);
    };
    CsvLoader.prototype.exitEmpty = function (ctx) {
        this.currentRowFieldValues.push(EMPTY);
    };
    return CsvLoader;
}());
export { CsvLoader };
