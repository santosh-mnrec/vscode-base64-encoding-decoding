import parse from './csvToJson';
var crypto = require("crypto");
import * as vscode from "vscode";
import { Range } from "vscode";
var Encoder = /** @class */ (function () {
    function Encoder() {
    }
    Encoder.prototype.base64Encode = function (e, d, sel) {
        e.edit(function (edit) {
            sel.forEach(function (s) {
                var txt = d.getText(new Range(s.start, s.end));
                var b = Buffer.from(txt);
                edit.replace(s, b.toString("base64"));
            });
        });
    };
    Encoder.prototype.base64Decode = function (e, d, sel) {
        e.edit(function (edit) {
            sel.forEach(function (s) {
                var txt = d.getText(new Range(s.start, s.end));
                var b = Buffer.from(txt, "base64");
                edit.replace(s, b.toString());
            });
        });
    };
    Encoder.prototype.decodeJwt = function (e, d, sel) {
        var token = d.getText();
        var decoded = jwt_decode(token);
        e.edit(function (edit) {
            edit.replace(sel[0], JSON.stringify(decoded, null, "\t"));
        });
    };
    Encoder.prototype.convertToMd5 = function (e, d, sel) {
        var data = d.getText();
        var md5 = crypto.createHash("md5").update(data).digest("hex");
        e.edit(function (edit) {
            edit.replace(sel[0], md5);
        });
    };
    Encoder.prototype.convertToJavascript = function (e, d, sel) {
        try {
            var json = parse(d.getText());
            var editor_1 = vscode.window.activeTextEditor;
            editor_1.edit(function (selectedText) {
                selectedText.replace(editor_1 === null || editor_1 === void 0 ? void 0 : editor_1.selection, JSON.stringify(json, null, 4));
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    return Encoder;
}());
export { Encoder };
