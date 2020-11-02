// Generated from CSV.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck
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
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
var CSVParser = /** @class */ (function (_super) {
    __extends(CSVParser, _super);
    function CSVParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator(CSVParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CSVParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CSVParser.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "CSV.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CSVParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSVParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CSVParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    // @RuleVersion(0)
    CSVParser.prototype.file = function () {
        var _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CSVParser.RULE_file);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 8;
                this.hdr();
                this.state = 10;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 9;
                            this.row();
                        }
                    }
                    this.state = 12;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSVParser.T__0) | (1 << CSVParser.T__1) | (1 << CSVParser.T__2) | (1 << CSVParser.TEXT) | (1 << CSVParser.STRING))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CSVParser.prototype.hdr = function () {
        var _localctx = new HdrContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CSVParser.RULE_hdr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 14;
                this.row();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CSVParser.prototype.row = function () {
        var _localctx = new RowContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CSVParser.RULE_row);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this.field();
                this.state = 21;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CSVParser.T__0) {
                    {
                        {
                            this.state = 17;
                            this.match(CSVParser.T__0);
                            this.state = 18;
                            this.field();
                        }
                    }
                    this.state = 23;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CSVParser.T__1) {
                    {
                        this.state = 24;
                        this.match(CSVParser.T__1);
                    }
                }
                this.state = 27;
                this.match(CSVParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CSVParser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CSVParser.RULE_field);
        try {
            this.state = 32;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CSVParser.TEXT:
                    _localctx = new TextContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 29;
                        this.match(CSVParser.TEXT);
                    }
                    break;
                case CSVParser.STRING:
                    _localctx = new StringContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 30;
                        this.match(CSVParser.STRING);
                    }
                    break;
                case CSVParser.T__0:
                case CSVParser.T__1:
                case CSVParser.T__2:
                    _localctx = new EmptyContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(CSVParser, "_ATN", {
        get: function () {
            if (!CSVParser.__ATN) {
                CSVParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSVParser._serializedATN));
            }
            return CSVParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    CSVParser.T__0 = 1;
    CSVParser.T__1 = 2;
    CSVParser.T__2 = 3;
    CSVParser.TEXT = 4;
    CSVParser.STRING = 5;
    CSVParser.RULE_file = 0;
    CSVParser.RULE_hdr = 1;
    CSVParser.RULE_row = 2;
    CSVParser.RULE_field = 3;
    // tslint:disable:no-trailing-whitespace
    CSVParser.ruleNames = [
        "file", "hdr", "row", "field",
    ];
    CSVParser._LITERAL_NAMES = [
        undefined, "','", "'\r'", "'\n'",
    ];
    CSVParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, "TEXT", "STRING",
    ];
    CSVParser.VOCABULARY = new VocabularyImpl(CSVParser._LITERAL_NAMES, CSVParser._SYMBOLIC_NAMES, []);
    CSVParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07%\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x06\x02" +
        "\r\n\x02\r\x02\x0E\x02\x0E\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07" +
        "\x04\x16\n\x04\f\x04\x0E\x04\x19\v\x04\x03\x04\x05\x04\x1C\n\x04\x03\x04" +
        "\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05#\n\x05\x03\x05\x02\x02\x02\x06" +
        "\x02\x02\x04\x02\x06\x02\b\x02\x02\x02\x02%\x02\n\x03\x02\x02\x02\x04" +
        "\x10\x03\x02\x02\x02\x06\x12\x03\x02\x02\x02\b\"\x03\x02\x02\x02\n\f\x05" +
        "\x04\x03\x02\v\r\x05\x06\x04\x02\f\v\x03\x02\x02\x02\r\x0E\x03\x02\x02" +
        "\x02\x0E\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x03\x03\x02\x02" +
        "\x02\x10\x11\x05\x06\x04\x02\x11\x05\x03\x02\x02\x02\x12\x17\x05\b\x05" +
        "\x02\x13\x14\x07\x03\x02\x02\x14\x16\x05\b\x05\x02\x15\x13\x03\x02\x02" +
        "\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02" +
        "\x02\x18\x1B\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x1A\x1C\x07\x04\x02" +
        "\x02\x1B\x1A\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1D\x03\x02\x02" +
        "\x02\x1D\x1E\x07\x05\x02\x02\x1E\x07\x03\x02\x02\x02\x1F#\x07\x06\x02" +
        "\x02 #\x07\x07\x02\x02!#\x03\x02\x02\x02\"\x1F\x03\x02\x02\x02\" \x03" +
        "\x02\x02\x02\"!\x03\x02\x02\x02#\t\x03\x02\x02\x02\x06\x0E\x17\x1B\"";
    return CSVParser;
}(Parser));
export { CSVParser };
var FileContext = /** @class */ (function (_super) {
    __extends(FileContext, _super);
    function FileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileContext.prototype.hdr = function () {
        return this.getRuleContext(0, HdrContext);
    };
    FileContext.prototype.row = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RowContext);
        }
        else {
            return this.getRuleContext(i, RowContext);
        }
    };
    Object.defineProperty(FileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CSVParser.RULE_file; },
        enumerable: false,
        configurable: true
    });
    // @Override
    FileContext.prototype.enterRule = function (listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    };
    // @Override
    FileContext.prototype.exitRule = function (listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    };
    return FileContext;
}(ParserRuleContext));
export { FileContext };
var HdrContext = /** @class */ (function (_super) {
    __extends(HdrContext, _super);
    function HdrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HdrContext.prototype.row = function () {
        return this.getRuleContext(0, RowContext);
    };
    Object.defineProperty(HdrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CSVParser.RULE_hdr; },
        enumerable: false,
        configurable: true
    });
    // @Override
    HdrContext.prototype.enterRule = function (listener) {
        if (listener.enterHdr) {
            listener.enterHdr(this);
        }
    };
    // @Override
    HdrContext.prototype.exitRule = function (listener) {
        if (listener.exitHdr) {
            listener.exitHdr(this);
        }
    };
    return HdrContext;
}(ParserRuleContext));
export { HdrContext };
var RowContext = /** @class */ (function (_super) {
    __extends(RowContext, _super);
    function RowContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RowContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    Object.defineProperty(RowContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CSVParser.RULE_row; },
        enumerable: false,
        configurable: true
    });
    // @Override
    RowContext.prototype.enterRule = function (listener) {
        if (listener.enterRow) {
            listener.enterRow(this);
        }
    };
    // @Override
    RowContext.prototype.exitRule = function (listener) {
        if (listener.exitRow) {
            listener.exitRow(this);
        }
    };
    return RowContext;
}(ParserRuleContext));
export { RowContext };
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CSVParser.RULE_field; },
        enumerable: false,
        configurable: true
    });
    FieldContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return FieldContext;
}(ParserRuleContext));
export { FieldContext };
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TextContext.prototype.TEXT = function () { return this.getToken(CSVParser.TEXT, 0); };
    // @Override
    TextContext.prototype.enterRule = function (listener) {
        if (listener.enterText) {
            listener.enterText(this);
        }
    };
    // @Override
    TextContext.prototype.exitRule = function (listener) {
        if (listener.exitText) {
            listener.exitText(this);
        }
    };
    return TextContext;
}(FieldContext));
export { TextContext };
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(CSVParser.STRING, 0); };
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    return StringContext;
}(FieldContext));
export { StringContext };
var EmptyContext = /** @class */ (function (_super) {
    __extends(EmptyContext, _super);
    function EmptyContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    EmptyContext.prototype.enterRule = function (listener) {
        if (listener.enterEmpty) {
            listener.enterEmpty(this);
        }
    };
    // @Override
    EmptyContext.prototype.exitRule = function (listener) {
        if (listener.exitEmpty) {
            listener.exitEmpty(this);
        }
    };
    return EmptyContext;
}(FieldContext));
export { EmptyContext };
