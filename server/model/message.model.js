"use strict";
var Message = (function () {
    function Message(from, content) {
        this.from = from;
        this.content = content;
    }
    return Message;
}());
exports.Message = Message;
