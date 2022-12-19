include codegen/build.mk
include tests/build.mk
include gh-pages/build.mk
include benchmark/build.mk

build/nodejs: $(CODEGEN_FILES)
	wasm-pack build --release --target nodejs --no-typescript --out-dir ../build/nodejs bindings
	cp js/* build/nodejs

CLEAN += build/nodejs

clean:
	rm -rf $(CLEAN)
