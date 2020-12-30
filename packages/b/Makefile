build:
	../../node_modules/.bin/tsc

package: 
	rm -rf node_modules
	yarn install --production
	$(MAKE) build
	cp -R node_modules dist
	