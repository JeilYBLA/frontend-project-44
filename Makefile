
install:
	npm ci

publish:
	npm publish --dry-run

brain-games.js:
	node bin/brain-games.js
