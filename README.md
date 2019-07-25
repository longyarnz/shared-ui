# Shared-UI.

## Intro
A simple app displaying canvas design components for [fireflies.ai](https://fireflies.ai).  

## How To Set Up
- Open the terminal in the project folder and run:
```sh
  npm install bit-bin -g
  npm config set '@bit:registry' https://node.bit.dev
  npm install
```
or run yarn
```sh
  yarn global add bit-bin
  yarn config set '@bit:registry' https://node.bit.dev
  yarn
```
The dependies will be installed on your local machine.  
```sh
  npm start
```
or run yarn
```sh
  yarn start
```
- Koala CSS processor: download Koala from [here](http://koala-app.com) and install.
- Open the project folder.   
![projects_folder](https://shared-ui.now.sh/assets/guide/projects.png)  

- Navigate to _**src/components**_ to view the canvas components.  
![components_folder](https://shared-ui.now.sh/assets/guide/components.png)  

- Open the Koala app  
![koala_app](https://shared-ui.now.sh/assets/guide/koala.png)  

- Move the folder of any component you want to work on into the Koala app.  
![moving_folder](https://shared-ui.now.sh/assets/guide/moving_folder.png) 

![moved_folder](https://shared-ui.now.sh/assets/guide/moved_folder.png)  

- Open the folder in the app and click on the _**.scss**_ file to set up the compiler on the right sidebar like so:  
![set_compiler](https://shared-ui.now.sh/assets/guide/set_compiler.png)  

- Right-click on the _**.scss**_ file and set the output path of the compiled file.  
![setting_output](https://shared-ui.now.sh/assets/guide/setting_output.png)  

- Set the output path to the _**.module.css**_ file in the folder: eg - _**toggle-button.module.css**_  
- Any change in the scss file will be compiled directly to the module.css file. All style changes should be made in the scss file, Koala will compile it into css.

## How To Edit Canvas component.
- Request Sam to add you to the bit collection.
- Pull this repo and follow the set up guide.
- Make changes to the file.
- Open terminal and run:  
```sh
  bit status
```
- If an update is required for any of the component, run:  
```sh
  bit import
```
- If all changes are complete, run:
```sh
  bit tag --all --patch
```
- After tagging, export the component to bit:
```sh
  bit export sudo.firefliesai
```
## Conclusion
You just completed the guide. For more info on how to use bit.dev visit the [docs.](https://docs.bit.dev)