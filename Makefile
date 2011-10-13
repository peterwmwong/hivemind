#===================================================================
#--------------------------- Variables -----------------------------
#===================================================================
npmbin = node_modules/.bin
requirejsBuild = ./client/vendor/requirejs/r.js

#===================================================================
#­--------------------------- TARGETS ------------------------------
#===================================================================
.PHONY : clean deps

#-------------------------------------------------------------------
# BUILD
#------------------------------------------------------------------- 
src/bootstrap.js: deps client/src/cell.js client/src/cell-pluginBuilder.js
	find ./client/src -name '*.styl' -type f | xargs $(npmbin)/stylus --include client/src/shared/styles --compress
	find ./client/src -name '*.coffee' -type f | xargs $(npmbin)/coffee -c -b 
	node $(requirejsBuild) \
		-o \
		paths.requireLib=../vendor/requirejs/require \
		include=requireLib \
		name=cell!App \
		out=client/src/bootstrap-tmp.js \
		baseUrl=client/src includeRequire=true
	cat client/src/bootstrap-tmp.js | $(npmbin)/uglifyjs -nc > client/src/bootstrap.js
	mv client/src/bootstrap-tmp.css client/src/bootstrap.css
	rm client/src/bootstrap-tmp.*

#-------------------------------------------------------------------
# TEST
#------------------------------------------------------------------- 
specs: deps
	find src -name '*Spec.coffee' | xargs $(npmbin)/coffee -e 'console.log "define([],#{JSON.stringify process.argv[4..].map (e)->/^src\/(.*?)\.coffee/.exec(e)[1]});"' > spec/allSpecs.js

#-------------------------------------------------------------------
# DEV 
#------------------------------------------------------------------- 
server: server/server.coffee deps
	$(npmbin)/coffee server/server.coffee

dev-stylus: deps
	find ./client/src -name '*.styl' -type f | xargs $(npmbin)/stylus --include client/src/shared/styles --watch --compress

dev-coffee: deps
	find ./client/src ./server/ -name '*.coffee' -type f | xargs $(npmbin)/coffee -c -b --watch

#-------------------------------------------------------------------
# Dependencies 
#------------------------------------------------------------------- 
deps:
	npm install

clean: 
	rm client/src/bootstrap.*
