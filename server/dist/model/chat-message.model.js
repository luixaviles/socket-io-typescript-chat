"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require("./");
var ChatMessage = (function (_super) {
    __extends(ChatMessage, _super);
    function ChatMessage(from, content) {
        _super.call(this, from, content);
    }
    return ChatMessage;
}(_1.Message));
exports.ChatMessage = ChatMessage;
