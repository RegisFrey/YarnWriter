export default {
  comments: {
    // symbol used for single line comment. Remove this entry if your
    // language does not support line comments
    lineComment: '//'
  },
  // symbols used as brackets
  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['<<', '>>']
  ],
  // symbols that are auto closed when typing
  autoClosingPairs: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['"', '"'],
    ['<<', '>>']
  ],
  // symbols that that can be used to surround a selection
  surroundingPairs: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['"', '"'],
    ["'", "'"],
    ['<', '>']
  ],
  folding: {
    markers: {
      // title: is _usually_ the first tag, but isn't guaranteed to
      // be; this is probably fine though
      start: '^title:',
      end: '^===$'
    }
  }
}
