#!/usr/bin/env sh

# abort on errors
set -e

npm run build:docs

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jarvelov/vue-form-json-schema.git master:gh-pages

cd -
