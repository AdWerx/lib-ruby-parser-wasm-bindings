tests/no-modules: build/web-lib-ruby-parser.js
	node tests/test-web.js

tests/nodejs: build/nodejs
	node tests/test-node.js
