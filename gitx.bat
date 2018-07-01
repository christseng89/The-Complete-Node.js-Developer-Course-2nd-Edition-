cd %1*
rd node_modules /s /q
cd ..
git commit -am "%1"
git push

del package-lock.json /s