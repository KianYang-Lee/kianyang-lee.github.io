#!/bin/bash
# Based on https://gist.github.com/georgegach/6dd6a15e7294045258079d161264bdbc
deployDirectory=dist
branch=gh-pages
build_command() {
  npm run build
}

echo -e "\033[0;32mDeleting existing $branch...\033[0m"
git push origin --delete $branch
git branch -D $branch

echo -e "\033[0;32mSetting up new $branch branch\033[0m"
git checkout --orphan $branch
git reset --hard
git commit --allow-empty -m "Init"
git checkout main

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $deployDirectory

echo -e "\033[0;32mChecking out $branch....\033[0m"
git worktree add $deployDirectory $branch

echo -e "\033[0;32mGenerating site...\033[0m"
build_command

echo -e "\033[0;32mPlacing generated files in right folder...\033[0m"
cp -r build/* $deployDirectory

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $deployDirectory &&
  touch .nojekyll &&
  git add --all &&
  git commit -m "Deploy updates" &&
  git push origin $branch

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $deployDirectory