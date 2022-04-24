# fullstackopen-2022
My exercises for the Open University Course "Full Stack Open" https://fullstackopen.com/en


## Shared `node_modules` / `package.json` / `package-lock.json`
Inside `react-starter-project`, there is the state of the react-app created with `npx create-react-app react-starter-project`.

To save disk-space, I delete all the `node_modules`-folders (around 210MB) in the other subprojects and created a symlink to the `node_modules` inside the folder `react-starter-project`. (According to https://medium.com/@sammychinedu2ky/making-multiple-projects-share-node-modules-directory-2779adfea2e4 and https://www.howtogeek.com/297721/how-to-create-and-use-symbolic-links-aka-symlinks-on-a-mac/).

AND: I also created symlinks for `package.json` and `package-lock.json` => since they should be in sync with all the code loaded in `node_modules`.