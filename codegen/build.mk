define download_file
curl "$(1)" --fail-with-body -LSso "$(2).tmp" && mv "$(2).tmp" "$(2)"
endef

CODEGEN_EXE = codegen/codegen$(EXE)
$(CODEGEN_EXE):
	$(call download_file,https://github.com/lib-ruby-parser/lib-ruby-parser/releases/download/codegen-v1.0.1/codegen-x86_64-apple-darwin,$@)
	chmod +x $(CODEGEN_EXE)
CLEAN += $(CODEGEN_EXE)

js/index.d.ts: codegen/types.d.ts.liquid $(CODEGEN_EXE)
	$(CODEGEN_EXE) --template $< --write-to $@
CLEAN += js/index.d.ts
CODEGEN_FILES += js/index.d.ts

js/nodes.js: codegen/nodes.js.liquid $(CODEGEN_EXE)
	$(CODEGEN_EXE) --template $< --write-to $@
CLEAN += js/nodes.js
CODEGEN_FILES += js/nodes.js

js/messages.js: codegen/messages.js.liquid $(CODEGEN_EXE)
	$(CODEGEN_EXE) --template $< --write-to $@
CLEAN += js/messages.js
CODEGEN_FILES += js/messages.js

bindings/src/nodes.rs: codegen/nodes.rs.liquid $(CODEGEN_EXE)
	$(CODEGEN_EXE) --template $< --write-to $@
CLEAN += bindings/src/nodes.rs
CODEGEN_FILES += bindings/src/nodes.rs

bindings/src/messages.rs: codegen/messages.rs.liquid $(CODEGEN_EXE)
	$(CODEGEN_EXE) --template $< --write-to $@
CLEAN += bindings/src/messages.rs
CODEGEN_FILES += bindings/src/messages.rs
