#!/usr/bin/env sh
set -e

rm -rf packages/docs/.vuepress/dist/ 
npm run docs:build
cd packages/docs/.vuepress/dist/

git init 
git config --local user.name "Seungwoo Lee"
git config --local user.email "seungwoo321@gmail.com"
git add -A
git commit -m "deploy with vue-pivottable docs"
git push -f git@github.com:Seungwoo321/vue-pivottable master:gh-pages

cd -