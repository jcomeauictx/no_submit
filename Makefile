BROWSER ?= chromium
PROJECT ?= $(notdir $(PWD))
export
test: test.html
	$(BROWSER) $<
/tmp/$(PROJECT).zip: /tmp/most_recent Makefile
	rm -f $@
	cd $(@D) && zip -r $(@F) $(<F)
/tmp/most_recent: manifest.json $(PROJECT).js icon.png .FORCE
	rm -rf $@
	mkdir -p $@
	cp -f $(filter-out .FORCE, $+) $@
%: %.ps
	display -page 128x128 $<
%.png: %.ps
	convert -page 128x128 $< $@
env set:
	$@
.FORCE:
