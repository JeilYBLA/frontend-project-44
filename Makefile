
install:
	npm ci
	npm readline-sync

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-games.js:
	node bin/brain-games.js
