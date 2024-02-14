install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix 

vs:
	code .

link:
	npm link

demo:
	asciinema rec demo.cast
