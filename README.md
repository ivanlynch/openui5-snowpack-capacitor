# OpenUI5 template for mobile development

> This repo is an alternative for build mobile aplications with OpenUI5

# Prerequisites

- [NodeJS](https://nodejs.org/en/ 'NodeJS')
- [Gulp](https://gulpjs.com/ 'Gulp')
- [Capacitor](https://capacitorjs.com/ 'Capacitor')
- [OpenUI5](https://openui5.org/ 'OpenUI5')

# Installation Steps

## 1. Download the repo

### Degit

Open your terminal and execute:

```bash
npx degit ivanlynch/openui5-snowpack-capacitor#main folder-name
```

this should download a copy of the repo in the defined folder then go to directory and install the dependencies like this:

```bash
cd folder-name && npm i
```

### Git

```bash
git clone https://github.com/ivanlynch/openui5-snowpack-capacitor.git
```

then cd into the repo folder

```bash
cd openui5-snowpack-capacitor && npm i
```

## 2. Running configuration tasks ⚙️

after installation of dependencies you need to execute:

```bash
gulp
```

> Note: Right now the tasks defined in Gulpfile only download the latest mobile-runtime version in the meantime you can edit the gulpfile to fit your needs

## 3. Build the application 🗜️

Before run our application into any platform we need to create the build folder that is defined in the property `"webDir"` of the `capacitor.config.json`

```bash
npm run build
```

after the command runs you will be able to see the build folder into the root of the project

## 4. Configure your IP 🔧

If we try to run the aplication on a real device we need to make sure two things:

- The first one is that we are in the same network
- Second, download any terminal from the App Store/Play Store and ping to your local ip address to make sure you have connectivity

after check those steps go to your `capacitor.config.json` and modify the `url` into the `server` section:

```json
  "server": {
      "url": "http://0.0.0.0:8080",
      "cleartext": true
  }
}
```

## 5. Add platforms 📱

IOS

`npx cap add ios`

Android

`npx cap add android`

## 6. Open the project

Now open the platform

`npx cap open <platform>`

## 7. Run the development server 💻

Now we need to run our development server

`npm run start`

this will start snowpack server and your browser should be opened.

> You can test the HMR (Hot module reload) in the browser

## 8. Run the application 🚀

Now go to xcode or android studio and run your application. Once the application is running, you will see the hmr in action.

> Note: Make sure to start snowpack before run the application
