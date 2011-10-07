#===================================================================
#--------------------------- Variables -----------------------------
#===================================================================
coffee = node_modules/.bin/coffee
stylus = node_modules/.bin/stylus
uglifyjs = node_modules/.bin/uglifyjs
connect = node_modules/connect/package.json
socketio = node_modules/socket.io/package.json
requirejsBuild = ./client/vendor/requirejs/r.js

#===================================================================
#­--------------------------- TARGETS ------------------------------
#===================================================================
.PHONY : clean

#-------------------------------------------------------------------
# BUILD
#------------------------------------------------------------------- 
src/bootstrap.js: $(uglifyjs) client/src/cell.js client/src/cell-pluginBuilder.js
	node $(requirejsBuild) \
		-o \
		paths.requireLib=../vendor/requirejs/require \
		include=requireLib \
		name=cell!App \
		out=client/src/bootstrap-tmp.js \
		baseUrl=client/src includeRequire=true
	cat client/src/bootstrap-tmp.js | $(uglifyjs) -nc > client/src/bootstrap.js
	mv client/src/bootstrap-tmp.css client/src/bootstrap.css
	rm client/src/bootstrap-tmp.*

#-------------------------------------------------------------------
# TEST
#------------------------------------------------------------------- 
specs:
	find src -name '*Spec.coffee' | xargs coffee -e 'console.log "define([],#{JSON.stringify process.argv[4..].map (e)->/^src\/(.*?)\.coffee/.exec(e)[1]});"' > spec/allSpecs.js

#-------------------------------------------------------------------
# DEV 
#------------------------------------------------------------------- 
server: $(coffee) $(connect) $(socketio) server.coffee
	$(coffee) server.coffee

dev-stylus: $(stylus)
	find ./client/src -name '*.styl' -type f | xargs $(stylus) --include client/src/shared/styles --watch --compress

dev-coffee: $(coffee)
	find ./client/src ./client/spec ./server.coffee -name '*.coffee' -type f | xargs $(coffee) -c -b --watch

#-------------------------------------------------------------------
# Dependencies 
#------------------------------------------------------------------- 
$(stylus) $(coffee) $(connect) $(uglifyjs) $(socketio):
	npm install --dev

clean: 
	rm client/src/bootstrap.*
