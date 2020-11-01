import jwt_decode = require("jwt-decode");
import parse from './csv-to-json';
const crypto = require("crypto");
import * as vscode from "vscode";
import { Range, Selection, TextDocument, TextEditor } from "vscode";

export class Encoder {
  base64Encode(e: TextEditor, d: TextDocument, sel: Selection[]) {
    e.edit(function (edit) {
      sel.forEach(function (s) {
        let txt: string = d.getText(new Range(s.start, s.end));
        let b: Buffer = Buffer.from(txt);
        edit.replace(s, b.toString("base64"));
      });
    });
  }

  base64Decode(e: TextEditor, d: TextDocument, sel: Selection[]) {
    e.edit(function (edit) {
      sel.forEach(function (s) {
        let txt: string = d.getText(new Range(s.start, s.end));
        let b: Buffer = Buffer.from(txt, "base64");
        edit.replace(s, b.toString());
      });
    });
  }
  decodeJwt(e: TextEditor, d: TextDocument, sel: Selection[]) {
    var token = d.getText();
    var decoded = jwt_decode(token) as string;
    e.edit(function (edit) {
      edit.replace(sel[0], JSON.stringify(decoded, null, "\t"));
    });
  }
  convertToMd5(e: TextEditor, d: TextDocument, sel: Selection[]) {

    var data = d.getText();
    var md5 = crypto.createHash("md5").update(data).digest("hex");
    e.edit(function (edit) {
      edit.replace(sel[0], md5);
    });
  }
  convertToJavascript(e: TextEditor, d: TextDocument, sel: Selection[]) {
    try {
      var json = parse(d.getText());
      const editor = vscode.window.activeTextEditor;
      editor.edit((selectedText) => {
        selectedText.replace(editor.selection, JSON.stringify(json,null,4));
      });

    } catch (error) {
      console.log(error);
    }


  }
}
