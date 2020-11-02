// Generated from CSV.g4 by ANTLR 4.7.3-SNAPSHOT
/* tslint:disable */

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CSVListener } from "./CSVListener";

export class CSVParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly TEXT = 4;
	public static readonly STRING = 5;
	public static readonly RULE_file = 0;
	public static readonly RULE_hdr = 1;
	public static readonly RULE_row = 2;
	public static readonly RULE_field = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "hdr", "row", "field",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'\r'", "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "TEXT", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CSVParser._LITERAL_NAMES, CSVParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CSVParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CSV.g4"; }

	// @Override
	public get ruleNames(): string[] { return CSVParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CSVParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CSVParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CSVParser.RULE_file);
		let _la: number;
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hdr(): HdrContext {
		let _localctx: HdrContext = new HdrContext(this._ctx, this.state);
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public row(): RowContext {
		let _localctx: RowContext = new RowContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CSVParser.RULE_row);
		let _la: number;
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07%\x04\x02" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSVParser.__ATN) {
			CSVParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSVParser._serializedATN));
		}

		return CSVParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public hdr(): HdrContext {
		return this.getRuleContext(0, HdrContext);
	}
	public row(): RowContext[];
	public row(i: number): RowContext;
	public row(i?: number): RowContext | RowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowContext);
		} else {
			return this.getRuleContext(i, RowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSVParser.RULE_file; }
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class HdrContext extends ParserRuleContext {
	public row(): RowContext {
		return this.getRuleContext(0, RowContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSVParser.RULE_hdr; }
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterHdr) {
			listener.enterHdr(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitHdr) {
			listener.exitHdr(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSVParser.RULE_row; }
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterRow) {
			listener.enterRow(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitRow) {
			listener.exitRow(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSVParser.RULE_field; }
	public copyFrom(ctx: FieldContext): void {
		super.copyFrom(ctx);
	}
}
export class TextContext extends FieldContext {
	public TEXT(): TerminalNode { return this.getToken(CSVParser.TEXT, 0); }
	constructor(ctx: FieldContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
}
export class StringContext extends FieldContext {
	public STRING(): TerminalNode { return this.getToken(CSVParser.STRING, 0); }
	constructor(ctx: FieldContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}
export class EmptyContext extends FieldContext {
	constructor(ctx: FieldContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterEmpty) {
			listener.enterEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitEmpty) {
			listener.exitEmpty(this);
		}
	}
}


