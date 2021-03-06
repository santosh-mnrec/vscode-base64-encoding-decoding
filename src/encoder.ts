import jwt_decode = require("jwt-decode");
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
      edit.replace(sel[0], JSON.stringify(decoded));
    });
  }
}
