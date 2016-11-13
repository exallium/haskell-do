// module State

"use strict";

exports.makeEditor = function (_id) {
  return function(){
    document.getElementById(_id.toString()).value = "";
    CodeMirror.fromTextArea(
      document.getElementById(_id.toString()),
      {mode: "haskell"}
    );
  }();
}