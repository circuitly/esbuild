#!/usr/bin/env bash
make platform-all

make --no-print-directory publish-win32-x64
make --no-print-directory publish-linux-x64
make --no-print-directory publish-linux-arm64
make --no-print-directory publish-linux-ppc64
make --no-print-directory publish-win32-arm64
make --no-print-directory publish-neutral
make --no-print-directory publish-wasm
