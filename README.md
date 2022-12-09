## To-Do
- [ ] Fix 404 page
- [ ] Fix mobile layout
- [ ] Set footer pos to absolute bottom
- [ ] Add some content
- [ ] Colouring theme for Vid web
## About
This is a redo of the old fsi web
## Link
Visit the live version at [Firebase](https://sman1-fsi.web.app/).
## How To Contribute
- Create A [Github](https://github.com) Account
- Creata A [Firebase](https://firebase.google.com) Account
- Install [node.js](https://nodejs.org/en/download/) 
- Install [Github Desktop](https://desktop.github.com)
- Install [VS-Code](https://code.visualstudio.com/download) or [Notepad++](https://notepad-plus-plus.org/downloads/)
- In Github Desktop Clone [this](https://github.com/MnyaMnya/fsi-web) Repository
- Open Terminal in VS-Code or open cmd in repository location and type
```
npm i
firebase login
```
- Make Some Changes
- Create a fork in Github Desktop and push
- See Changes Using
```
firebase emulators:start
```
- And Use this to apply changes
```
firebase deploy --only hosting:sman1-fsi
```
## How To Make Some Changes
- After Repository Cloned Open It with VS-Code or Notepad++
- All File are in public folder
- Just Insert PDF Link in this format
```
<tr>
  <td href="(pdf link)" src="(img file)"></td>
  <td href="(pdf link)" src="(img file)"></td>
  <td href="(pdf link)" src="(img file)"></td>
</tr>
```
- Use PDF To IMG Converter to Make The Img file
- Only 3 td are allowed inside tr
- And save The Changes

