.PHONY: compile package debug

compile:
	yarn
	../../node_modules/.bin/tsc

package: compile
	rm -rf node_modules
	# isntall only the production dependencies
	yarn workspaces focus --production
	cp -R node_modules dist
	# build the docker image
	docker build -t b .
	# install all the dev dependencies again (for convenience)
	yarn 
	
debug:
	node --inspect -r ts-node/register src/index.ts