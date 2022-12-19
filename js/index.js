const { parse } = require("./lib_ruby_parser_wasm");
const { Node, nodes } = require("./nodes");
const { Message, messages } = require("./messages");
const {
  ParserResult,
  Token,
  Comment,
  MagicComment,
  DecodedInput,
  SourceLine,
  Diagnostic,
  Loc,
  Bytes,
} = require("./types");

module.exports = {
  parse,
  nodes,
  Node,
  Message,
  messages,
  ParserResult,
  Token,
  Comment,
  MagicComment,
  DecodedInput,
  SourceLine,
  Diagnostic,
  Loc,
  Bytes,
};
