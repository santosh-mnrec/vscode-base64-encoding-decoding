import * as vscode from "vscode";
import Window = vscode.window;
import Range = vscode.Range;
import Selection = vscode.Selection;
import TextDocument = vscode.TextDocument;
import TextEditor = vscode.TextEditor;
import { Encoder } from "./encoder";

export function activate(context: vscode.ExtensionContext) {
  var encoder = new Encoder();
  let encode = vscode.commands.registerCommand("extension.base64Encode", () => {
    let e = Window.activeTextEditor;
    let d = e?.document;
    let sel = e?.selections;
    if (e && d && sel) encoder.base64Encode(e, d, sel);
  });
  let decode = vscode.commands.registerCommand("extension.base64Decode", () => {
    let e = Window.activeTextEditor;
    let d = e?.document;
    let sel = e?.selections;
    if (e && d && sel) encoder.base64Decode(e, d, sel);
  });
  let jwtDecode = vscode.commands.registerCommand("extension.decodeJwt", () => {
    vscode.window.showInformationMessage("Decoding JWT");
    let e = Window.activeTextEditor;
    let d = e?.document;
    let sel = e?.selections;
    if (e && d && sel) {
      encoder.decodeJwt(e, d, sel);
      vscode.window.showInformationMessage("Done");
    }
  });

  context.subscriptions.push(encode);
  context.subscriptions.push(decode);
  context.subscriptions.push(jwtDecode);
}

// this method is called when your extension is deactivated
export function deactivate() {}
