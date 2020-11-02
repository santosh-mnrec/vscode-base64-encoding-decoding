// @ts-nocheck
import * as vscode from "vscode";
var Window = vscode.window;
import { Encoder } from "./encoder";
export function activate(context) {
    var encoder = new Encoder();
    var encode = vscode.commands.registerCommand("extension.base64Encode", function () {
        var e = Window.activeTextEditor;
        var d = e === null || e === void 0 ? void 0 : e.document;
        var sel = e === null || e === void 0 ? void 0 : e.selections;
        if (e && d && sel)
            encoder.base64Encode(e, d, sel);
    });
    var decode = vscode.commands.registerCommand("extension.base64Decode", function () {
        var e = Window.activeTextEditor;
        var d = e === null || e === void 0 ? void 0 : e.document;
        var sel = e === null || e === void 0 ? void 0 : e.selections;
        if (e && d && sel)
            encoder.base64Decode(e, d, sel);
    });
    var jwtDecode = vscode.commands.registerCommand("extension.decodeJwt", function () {
        vscode.window.showInformationMessage("Decoding JWT");
        var e = Window.activeTextEditor;
        var d = e === null || e === void 0 ? void 0 : e.document;
        var sel = e === null || e === void 0 ? void 0 : e.selections;
        if (e && d && sel) {
            encoder.decodeJwt(e, d, sel);
            vscode.window.showInformationMessage("Done");
        }
    });
    var convertToMd5 = vscode.commands.registerCommand("extension.convertToMd5", function () {
        var e = Window.activeTextEditor;
        var d = e === null || e === void 0 ? void 0 : e.document;
        var sel = e === null || e === void 0 ? void 0 : e.selections;
        if (e && d && sel)
            encoder.convertToMd5(e, d, sel);
    });
    var convertToJson = vscode.commands.registerCommand("extension.convertToJavascript", function () {
        // Get the active text editor
        var editor = vscode.window.activeTextEditor;
        if (editor) {
            var document_1 = editor.document;
            var e = Window.activeTextEditor;
            var d = e === null || e === void 0 ? void 0 : e.document;
            var sel = e === null || e === void 0 ? void 0 : e.selections;
            if (e && d && sel) {
                encoder.convertToJavascript(e, document_1, sel);
            }
        }
    });
    context.subscriptions.push(encode);
    context.subscriptions.push(decode);
    context.subscriptions.push(jwtDecode);
    context.subscriptions.push(convertToMd5);
    context.subscriptions.push(convertToJson);
}
// this method is called when your extension is deactivated
export function deactivate() { }
