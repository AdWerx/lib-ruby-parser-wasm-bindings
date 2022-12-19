class Loc {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
  }
}

class Bytes {
  constructor(raw) {
    this.raw = raw;
  }
}

class ParserResult {
  constructor(ast, tokens, diagnostics, comments, magic_comments, input) {
    this.ast = ast;
    this.tokens = tokens;
    this.diagnostics = diagnostics;
    this.comments = comments;
    this.magic_comments = magic_comments;
    this.input = input;
  }
}

class Token {
  constructor(token_type, token_value, loc, lex_state_before, lex_state_after) {
    this.token_type = token_type;
    this.token_value = token_value;
    this.loc = loc;
    this.lex_state_before = lex_state_before;
    this.lex_state_after = lex_state_after;
  }

  name() {
    return tokens.id_to_name[this.token_type];
  }
}

class Comment {
  constructor(loc, kind) {
    this.loc = loc;
    this.kind = kind;
  }
}

class MagicComment {
  constructor(kind, key_l, value_l) {
    this.kind = kind;
    this.key_l = key_l;
    this.value_l = value_l;
  }
}

class DecodedInput {
  constructor(name, lines, bytes) {
    this.name = name;
    this.lines = lines;
    this.bytes = bytes;
  }
}

class SourceLine {
  constructor(start, end, ends_with_eof) {
    this.start = start;
    this.end = end;
    this.ends_with_eof = ends_with_eof;
  }
}

class Diagnostic {
  constructor(level, message, loc) {
    this.level = level;
    this.message = message;
    this.loc = loc;
  }
}

module.exports = {
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
