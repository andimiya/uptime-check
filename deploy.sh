#!/bin/bash

npm run build

git add build/index.html
git add build/asset-manifest.json
git add build/service-worker.js
git add build/static -f
git commit -m "Initial commit"

git push origin master
