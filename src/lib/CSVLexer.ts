// Generated from CSV.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CSVLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly TEXT = 4;
	public static readonly STRING = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "TEXT", "STRING",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'\r'", "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "TEXT", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CSVLexer._LITERAL_NAMES, CSVLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CSVLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CSVLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CSV.g4"; }

	// @Override
	public get ruleNames(): string[] { return CSVLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CSVLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CSVLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CSVLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07#\b\x01\x04" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSVLexer.__ATN) {
			CSVLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSVLexer._serializedATN));
		}

		return CSVLexer.__ATN;
	}

}

