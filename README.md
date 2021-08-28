
# Demo

## Live Demo

click [Here](https://reusable-upload-image-profil-component.netlify.app/)

## Picture demo
***Scenario demo***
![alt text](/demo/demo-scenario.png)

***Start screen***
>![alt text](/demo/pict-init.png)

***Upload zone***
>![alt text](/demo/pict-upload.png)
When the picture is ready to read to the browser, she's already compressed on fly with WebWorker.

***Crop zone***
>![alt text](/demo/pict3.png)
You have a little round view, this is preview of final result.

***Filter zone***
>![alt text](/demo/pict4.png)
You have 7 tools for adding some filters to your picture.

***Final screen***
>![alt text](/demo/pict5.png)
The picture is displayed with all specifications (crop, filters) setted during the process.


***All settings (Compressed picture, cropped picture & filter css setting) are in localStorage & session Storage***
>![alt text](/demo/pict2.png)


***All Dependencies for this component***
>![alt text](/demo/dependencies.png)

- Material-ui/core & Material-ui/icons fro the design.
- React-dropzone for the upload zone.
- Browser-image-compression fro compress the picture on fly with webWorker.
- cropperjs for cropping the picture.
- React-responsive-modal for Modal cropper component.
- React-router-dom for routing the app pages.
- React-toastify for the toast info at each step.

## How to test & use this component?

***You need to clone or download the repo***
After that, at the root of the app type
```bash
npm i
```
or
``` bash
yarn
```
for install all dependencies

And then, type
``` bash
npm start
```
or
``` bash
yarn start
```
For starting the app at
``` bash
http://localhost:3000
```
### How to use this component easy?
```javascript
import {Fragment} from "react";
import useLocalStorage from "./hooks/storageHooks/useLocalStorage";
import { Avatar } from "@material-ui/core/";
import PictureCompress from "./profilePictureResize/PictureCompress";

const Home = () => {
  //  Use LocalStorage custom hook for getting the  cropped picture
  const [croppedImg] = useLocalStorage({}, "imgBase64Cropped");
  // Use LocalStorage for getting the style of picture
  const [ImageStyle] = useLocalStorage({}, "styleImg");
  return (
    <Fragment>
        <div>
        {/*If image is present to localstorage then display this*/}
          {croppedImg.imageDestination && (
            <img
              id="profile-picture"
              src={croppedImg.imageDestination}
              style={ImageStyle}
              alt="profile"
            />
          )}
          {/* Else display avatar icon from material-ui */}
          {!croppedImg.imageDestination && (
            <Avatar
              id="profile-picture"
              style={{
                width: 253,
                height: 253,
                boxShadow: "7px 7px 21px #808080",
              }}
            />
          )}
        </div>
         {/*The button component for opening the upload zone*/}
        <PictureCompress />
    </Fragment>
  );
};

export default Home;

```
<!-- ### PWA RUM & Classic RUM version's

 ![alt text](/img/rum-version.png "RUM versions")


## Online Demo sites

### Free version
**You can try Classic React Ultimate Messenger ** **[here](https://react-ultimate-messenger.netlify.app/) **,

(The demo is not fully functional without the server started locally*)

### On donation version
**You can try also PWA React Ultimate Messenger** **[here](https://pwa-react-ultimate-messenger.netlify.app/) **.

(The demo is not fully functional without locally started servers*)

> *you can only send/receive messages if you have the server locally on your machine -
> I explain how to test the online version with your local version further in the documentation...


## Getting Started

Get started by **creating a new React App**.

### You have two options:

#### The first option is the auto-installation script, simple & fast.

>**You can use my bash script, this is a more fast & easy way to doing that!**
>
><a id="raw-url" href="https://github.com/rodolphe37/cra-react-ultimate-messenger/blob/main/react_ultimate_messenger_install_v1.2.1.zip">Download autoInstall script here</a>


***Here is a short video demonstration of how to use the script.***
>[![embed url](/img/demo-script.png)](https://youtu.be/glJNtVUDDcw)


#### The second option is to generate a new React App through the create-react-app tool manually.

**Generate a classic React template with integrated chat from npx command:**

create a folder, go to it and open your terminal from this folder of course,

For the moment there is **one line of code to do** before the creation of the React App...
```shell
git clone https://github.com/rodolphe37/cra-react-ultimate-messenger.git
```
After that, you can do the npx command which allows to install a classic React, but with the template option.

```shell
npx create-react-app my-app --template file:../path/to/your/template/folder/you/just/cloned/cra-react-ultimate-messenger
```

## Start your site

***Run the development server:***

go to your folder app
```shell
cd my-app
```

***If you have nvm installed:***

> the chat application requires at least version 12 of Node.js, the nvmrc file is initialized with version 14.15.1. If you have version 12 or higher everything will work fine!
> Otherwise you can change your Node version by simply doing:
> ```shell
> nvm use
> ```

At this stage, you have two lines of code to do:

 * *I made several scripts in the package.json so that everything is automatic!*

The first line is for initializing all servers
```shell
npm run initAll
```
> - This script will first install the necessary node_modules in the messages-images server, then create an images folder (in which the images sent in the chat will be sent), then rename the .env.example file to .env.
> - Then he will install the node_modules in the video chat server and rename the .env.example file to .env (for pwa version).
> - And finally, he will rename the .env.local.example file to .env.local in the React frontend folder.


And the second line is to start all the services.
```shell
npm run dev
```

  With this single line of code you will start
 > - the server that manages the chat (messages and images) on port 4000,
 > - the video chat (which can be optional, that's why it's separate) on port 4001 (for pwa version),
 > - as well as the classic React frontend on the classic port 3000.


Your site starts at `http://localhost:3000`.

### How to test your local version with the online version!

> * At this level of the tutorial, you have your backend server(s) and your site started and open at the classic address.
> You just have to open in another browser window the demo that corresponds to the version you just installed (link available at the top of the page).
> Then you just have to connect to the same room in both windows and start testing your version.

  ***The left window is the online (prod) version - The right window is your local (dev) version.***
 ![alt text](/img/test-classic.png "Remote test")

* **Enjoy!**


## To work with this version

 Open your App folder with your **usual editor** and **start making your React App as usual**! -->
<!--

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like. -->
