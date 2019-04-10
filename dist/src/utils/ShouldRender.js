"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShouldRender;

function ShouldRender(props) {
  return props.if ? props.children : null;
}

//# sourceMappingURL=ShouldRender.js.map