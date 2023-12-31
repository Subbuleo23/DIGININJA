import * as CodeMirror from "codemirror";
import "codemirror/addon/edit/closetag";

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    autoCloseTags: true,
});

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.closeTag,
};
