
install:
	npm ci
	npm readline-sync

publish:
	npm publish --dry-run

brain-games.js:
	node bin/brain-games.js
