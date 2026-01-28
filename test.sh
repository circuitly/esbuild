#!/usr/bin/env bash
make && ./esbuild test.js --bundle --debug-alloc --platform=node
