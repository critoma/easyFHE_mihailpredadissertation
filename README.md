# easyFHE

For each submodule run

```
npm run install
```

```
npm run build
```

## Update site demo

1. Delete `dist` folder from the root directory

```
rm -rf dist/
```

2. Delete branch locally

```
git branch -d gh-pages
```

3. Delete branch remotely

```
git push origin --delete gh-pages
```

4. To build quasar demo go in `fhe-module-quasar-demo`

```
quasar build
```

5. Copy folder `dist` folder to root folder

```
cp -r dist/ ../
```

6. Commit changes

```
git add dist && git commit -m 'adding dist subtree'
```

7. Recreate gh-pages branch

```
git subtree push --prefix dist/spa origin gh-pages
```