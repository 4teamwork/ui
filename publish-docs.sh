#!/usr/bin/env sh

set -e

# build
yarn docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:4teamwork/ui.git master:gh-pages

cd -
