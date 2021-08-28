
# Démo

![alt text](/demo/demo-scenario.png)

>![alt text](/demo/pict1.png)

>![alt text](/demo/pict2.png)

>![alt text](/demo/pict-init.png)

>![alt text](/demo/pict-upload.png)

>![alt text](/demo/pict3.png)

>![alt text](/demo/pict4.png)

>![alt text](/demo/pict5.png)
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
