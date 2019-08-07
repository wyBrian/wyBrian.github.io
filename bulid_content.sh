#!/bin/bash

rm *.json
rm *.js
rm *.ico
rm *.html
rm -rf ./static

cd ./myblog
npm run build
mv build/* ..
