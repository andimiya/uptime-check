#!/bin/bash

git remote rename origin upstream

git remote add origin git@github.com:andimiya/andimiya.github.io.git

git add build/index.html
git commit -m "Initial commit"

git push origin master
