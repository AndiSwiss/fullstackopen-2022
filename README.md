# fullstackopen-2022
These are my exercises for the Open University Course "Full Stack Open" https://fullstackopen.com/en

## IMPORTANT: Start this project
Since I used shared `node_modules` / `package.json` / `package-lock.json` (see section below), you have to install the dependencies only once, like so:
```bash
cd react-libraries
npm install
```
=> This will install all dependencies in `react-libraries/node_modules`, and then all the subprojects can use these dependencies together! Run a subproject either via Run-Config in IntelliJ, or simply:
```bash
cd REACT_SUBPROJECT_FOLDER
npm start
```

Do the same in folder `react-libraries-backend`.


## Shared `node_modules` / `package.json` / `package-lock.json`
To save disk-space, I deleted all the `node_modules`-folders (around 210MB) in all the subprojects and created a shared library in `react-libraries`. A symlink then points from each subproject to the `node_modules` inside the folder `react-libraries`. (According to https://medium.com/@sammychinedu2ky/making-multiple-projects-share-node-modules-directory-2779adfea2e4 and https://www.howtogeek.com/297721/how-to-create-and-use-symbolic-links-aka-symlinks-on-a-mac/).

AND: I also created symlinks for `package.json` and `package-lock.json` => since they should be in sync with all the code loaded in `node_modules`.

**Result**: When having around 10 subprojects, you can save around 2GB of disk-space with this method!!

### Setting up a new subproject - using the shared resources
Copy all required code from `react-starter-project`. Also copy the symlinked `node_modules`and `package.json` and `package-lock.json`.

=> Use the following code to create the symlinks, if you need to recreate them:
```bash
cd TO_YOUR_DIRECTORY
ln -s ../../react-libraries/node_modules node_modules
ln -s ../../react-libraries/package.json package.json
ln -s ../../react-libraries/package-lock.json package-lock.json

# Or less deep, depending on the folder structure:
cd TO_YOUR_DIRECTORY
ln -s ../react-libraries/node_modules node_modules
ln -s ../react-libraries/package.json package.json
ln -s ../react-libraries/package-lock.json package-lock.json
```

If you need to recreate `node_modules` in `react-libraries`:
- Delete or backup `react-libraries`
- Create a new react-app: `npx create-react-app react-libraries`
- Delete all files except the folder `node_modules` and the files `package.json` and `package-lock.json`

And don't put the symlink `node_modules` to the `.gitignore`, except the `react-libraries/node_modules`


## Debugging
Just write `debugger` anywhere in the code (e.g. in a function-call where you suspect problems). The Chrome browser with the opened developer-tools will automatically stop when this breakpoint is reached.

You can also wrap it in a condition, so it only stops, when a certain condition is met:
```javascript
if (count === 5) { debugger }
```
More about this feature: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger

Additionally, use these features built-in to Chrome: https://developer.chrome.com/docs/devtools/javascript/reference

---
## Possible caveats

### Problem
In the beginning, the idea with the shared React libraries in `react-libraries` and the symlinks worked just great. But from one point on, the sub-app 'lesson-code' throws a lot of errors, and it crashes badly. One of the many errors are (see below). Only the sub-project **lesson-code** was crashing. It seemed to have problem with `useState` => when I removed it, it was ok. It threw many errors, one of it:
```
react.development.js:209 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```
### Solution 
I had to delete the three symlinks to `node-modules`, `package.json` and `package-lock.json` and recreate them. After that, everything was fine!
