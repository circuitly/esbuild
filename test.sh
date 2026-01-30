#!/usr/bin/env bash
rm -f _test.js
make && ./esbuild test.js --bundle --debug-alloc --platform=node > _test.js \
&& cat _test.js \
&& node _test.js

