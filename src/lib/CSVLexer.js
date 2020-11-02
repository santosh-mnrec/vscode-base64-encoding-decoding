// Generated from CSV.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
var CSVLexer = /** @class */ (function (_super) {
    __extends(CSVLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function CSVLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator(CSVLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(CSVLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CSVLexer.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "CSV.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return CSVLexer.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return CSVLexer._serializedATN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVLexer.prototype, "channelNames", {
        // @Override
        get: function () { return CSVLexer.channelNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVLexer.prototype, "modeNames", {
        // @Override
        get: function () { return CSVLexer.modeNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVLexer, "_ATN", {
        get: function () {
            if (!CSVLexer.__ATN) {
                CSVLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSVLexer._serializedATN));
            }
            return CSVLexer.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    CSVLexer.T__0 = 1;
    CSVLexer.T__1 = 2;
    CSVLexer.T__2 = 3;
    CSVLexer.TEXT = 4;
    CSVLexer.STRING = 5;
    // tslint:disable:no-trailing-whitespace
    CSVLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    CSVLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    CSVLexer.ruleNames = [
        "T__0", "T__1", "T__2", "TEXT", "STRING",
    ];
    CSVLexer._LITERAL_NAMES = [
        undefined, "','", "'\r'", "'\n'",
    ];
    CSVLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, "TEXT", "STRING",
    ];
    CSVLexer.VOCABULARY = new VocabularyImpl(CSVLexer._LITERAL_NAMES, CSVLexer._SYMBOLIC_NAMES, []);
    CSVLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07#\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x06\x05\x15\n\x05" +
        "\r\x05\x0E\x05\x16\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x1D\n\x06\f" +
        "\x06\x0E\x06 \v\x06\x03\x06\x03\x06\x02\x02\x02\x07\x03\x02\x03\x05\x02" +
        "\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03\x02\x04\x06\x02\f\f\x0F\x0F$" +
        "$..\x03\x02$$\x02%\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
        "\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r" +
        "\x03\x02\x02\x02\x05\x0F\x03\x02\x02\x02\x07\x11\x03\x02\x02\x02\t\x14" +
        "\x03\x02\x02\x02\v\x18\x03\x02\x02\x02\r\x0E\x07.\x02\x02\x0E\x04\x03" +
        "\x02\x02\x02\x0F\x10\x07\x0F\x02\x02\x10\x06\x03\x02\x02\x02\x11\x12\x07" +
        "\f\x02\x02\x12\b\x03\x02\x02\x02\x13\x15\n\x02\x02\x02\x14\x13\x03\x02" +
        "\x02\x02\x15\x16\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16\x17\x03\x02" +
        "\x02\x02\x17\n\x03\x02\x02\x02\x18\x1E\x07$\x02\x02\x19\x1A\x07$\x02\x02" +
        "\x1A\x1D\x07$\x02\x02\x1B\x1D\n\x03\x02\x02\x1C\x19\x03\x02\x02\x02\x1C" +
        "\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E" +
        "\x1F\x03\x02\x02\x02\x1F!\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07" +
        "$\x02\x02\"\f\x03\x02\x02\x02\x06\x02\x16\x1C\x1E\x02";
    return CSVLexer;
}(Lexer));
export { CSVLexer };
