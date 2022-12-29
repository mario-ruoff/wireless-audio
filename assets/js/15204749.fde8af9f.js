"use strict";(self.webpackChunkbalena_labs=self.webpackChunkbalena_labs||[]).push([[275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,b=c["".concat(p,".").concat(h)]||c[h]||d[h]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const l={slug:"/",sidebar_position:1,title:"Getting Started",breadcrumbs:!1},i="![logo](https://raw.githubusercontent.com/balenalabs/balena-sound/master/docs/images/balenaSound-logo.png)",r={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Getting started with balenaSound is as simple as deploying it to a balenaCloud fleet; no additional configuration is required (unless you're using a DAC HAT).",source:"@site/docs/01-getting-started.md",sourceDirName:".",slug:"/",permalink:"/wireless-audio/",draft:!1,editUrl:"https://github.com/mario-r99/wireless-audio/edit/master/docs/01-getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Getting Started",breadcrumbs:!1},sidebar:"tutorialSidebar",next:{title:"Usage",permalink:"/wireless-audio/usage"}},p={},s=[{value:"Hardware required",id:"hardware-required",level:2},{value:"Software required",id:"software-required",level:2},{value:"One-click deploy",id:"one-click-deploy",level:2},{value:"Deploy with balena",id:"deploy-with-balena",level:3},{value:"Provision your device",id:"provision-your-device",level:3},{value:"CLI deploy",id:"cli-deploy",level:2},{value:"Provision your device",id:"provision-your-device-1",level:3},{value:"Deploy the app",id:"deploy-the-app",level:3},{value:"Upgrade",id:"upgrade",level:2},{value:"Upgrading via CLI",id:"upgrading-via-cli",level:3},{value:"Upgrading via one-click",id:"upgrading-via-one-click",level:3},{value:"Having trouble?",id:"having-trouble",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logo"},(0,o.kt)("img",{parentName:"h1",src:"https://raw.githubusercontent.com/balenalabs/balena-sound/master/docs/images/balenaSound-logo.png",alt:"logo"})),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Getting started with balenaSound is as simple as deploying it to a ",(0,o.kt)("a",{parentName:"p",href:"https://balena.io/cloud"},"balenaCloud")," fleet; no additional configuration is required (unless you're using a DAC HAT).\nWe've outlined the installation steps below. If you want a step-by-step tutorial on how to get balenaSound up and running, feel free to check these blog posts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.balena.io/blog/turn-your-old-speakers-or-hi-fi-into-bluetooth-receivers-using-only-a-raspberry-pi/"},"Turn your old speakers or Hi-Fi into Bluetooth, Airplay and Spotify receivers with a Raspberry Pi and this step-by-step guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.balena.io/blog/diy-raspberry-pi-multi-room-audio-system/"},"Build your own multi-room audio system with Bluetooth, Airplay, and Spotify using Raspberry Pis"))),(0,o.kt)("h2",{id:"hardware-required"},"Hardware required"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/balenalabs/balena-sound/master/docs/images/hardware.jpeg",alt:"hardware"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any device from our ",(0,o.kt)("a",{parentName:"li",href:"device-support#recommended"},"supported devices list"),". For the best experience, we recommend using a Raspberry Pi 3B+ or 4B."),(0,o.kt)("li",{parentName:"ul"},"An SD Card! We recommend the Sandisk Extreme Pro series. 8GB should be plenty enough for this project."),(0,o.kt)("li",{parentName:"ul"},"Power supply"),(0,o.kt)("li",{parentName:"ul"},"3.5mm audio cable to the input on your speakers/Hi-Fi (usually 3.5mm or RCA). Alternatively you can use the HDMI port to get digital audio out.")),(0,o.kt)("h2",{id:"software-required"},"Software required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Software to flash an SD card (",(0,o.kt)("a",{parentName:"li",href:"https://balena.io/etcher"},"balenaEtcher"),")"),(0,o.kt)("li",{parentName:"ul"},"A free ",(0,o.kt)("a",{parentName:"li",href:"https://balena.io/cloud"},"balenaCloud")," account"),(0,o.kt)("li",{parentName:"ul"},"(optional) A download of this project"),(0,o.kt)("li",{parentName:"ul"},"(optional) The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balena-io/balena-cli/blob/master/INSTALL.md"},"balena CLI tools"))),(0,o.kt)("h2",{id:"one-click-deploy"},"One-click deploy"),(0,o.kt)("p",null,"One-click deploy is the easiest way to get started with balenaSound as it allows you to deploy and configure the app with a single click and without the need of installing additional tools. Check out the ",(0,o.kt)("inlineCode",{parentName:"p"},"CLI deploy")," instructions below if you are interested in an advanced alternative that enables you to achieve more complex deployments."),(0,o.kt)("h3",{id:"deploy-with-balena"},"Deploy with balena"),(0,o.kt)("p",null,"Click this button to go straight to balenaCloud fleet creation, where balenaSound app will be pre-loaded:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balena-labs-projects/balena-sound&defaultDeviceType=raspberry-pi"},(0,o.kt)("img",{parentName:"a",src:"https://balena.io/deploy.svg",alt:"balena deploy button"}))),(0,o.kt)("h3",{id:"provision-your-device"},"Provision your device"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/balenalabs/balena-sound/master/docs/images/sdcard.gif",alt:"sdcard"})),(0,o.kt)("p",null,"Once your fleet has been created you'll need to add a device to it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a device to the fleet by clicking the ",(0,o.kt)("inlineCode",{parentName:"li"},"add device")," button"),(0,o.kt)("li",{parentName:"ol"},"Download the OS and flash it to your SD card with ",(0,o.kt)("a",{parentName:"li",href:"https://balena.io/etcher"},"balenaEtcher")),(0,o.kt)("li",{parentName:"ol"},"Power up your device and check it's online in the dashboard!")),(0,o.kt)("p",null,"The balenaSound app will start downloading as soon as your device appears in the dashboard."),(0,o.kt)("h2",{id:"cli-deploy"},"CLI deploy"),(0,o.kt)("p",null,"This is the traditional and more advanced approach for deploying apps to balena powered devices. Installing and setting up the balena CLI is definitely more involved than using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy with balena")," button, but it allows for more flexibility and customization when choosing what and when to deploy."),(0,o.kt)("p",null,"For example, if you don't plan on using the Spotify integration, you can edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and remove the Spotify service before deploying the app."),(0,o.kt)("h3",{id:"provision-your-device-1"},"Provision your device"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign up for or login to the ",(0,o.kt)("a",{parentName:"li",href:"https://dashboard.balena-cloud.com"},"balenaCloud dashboard")),(0,o.kt)("li",{parentName:"ol"},"Create a fleet, selecting the correct device type. If you are using a Raspberry Pi (any model) we recommend setting the type as ",(0,o.kt)("inlineCode",{parentName:"li"},"Raspberry Pi (v1 / Zero / Zero W)")," as your fleet will then be compatible with all Raspberry Pi versions."),(0,o.kt)("li",{parentName:"ol"},"Add a device to the fleet, enabling you to download the OS"),(0,o.kt)("li",{parentName:"ol"},"Flash the downloaded OS to your SD card with ",(0,o.kt)("a",{parentName:"li",href:"https://balena.io/etcher"},"balenaEtcher")),(0,o.kt)("li",{parentName:"ol"},"Power up your device and check it's online in the dashboard")),(0,o.kt)("h3",{id:"deploy-the-app"},"Deploy the app"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balena-io/balena-cli/blob/master/INSTALL.md"},"balena CLI tools")),(0,o.kt)("li",{parentName:"ul"},"Login with ",(0,o.kt)("inlineCode",{parentName:"li"},"balena login")),(0,o.kt)("li",{parentName:"ul"},"Download this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balenalabs/balena-sound/"},"app")," and from the project directory run ",(0,o.kt)("inlineCode",{parentName:"li"},"balena push <fleetName>")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"<fleetName>")," is the name you gave your balenaCloud fleet in the first step.")),(0,o.kt)("h2",{id:"upgrade"},"Upgrade"),(0,o.kt)("h3",{id:"upgrading-via-cli"},"Upgrading via CLI"),(0,o.kt)("p",null,"To deploy bug fixes or new features to your balenaSound application, the process is the same as a deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balena-io/balena-cli/blob/master/INSTALL.md"},"balena CLI tools")),(0,o.kt)("li",{parentName:"ul"},"Login with ",(0,o.kt)("inlineCode",{parentName:"li"},"balena login")),(0,o.kt)("li",{parentName:"ul"},"Download this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balenalabs/balena-sound/"},"project")," and from the project directory run ",(0,o.kt)("inlineCode",{parentName:"li"},"balena push <appName>")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"<appName>")," is the name you gave your balenaCloud application during the provision step above.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),' If you receive the message "Application is ambiguous" during the push, then you will need to specify your balenaCloud username along with the ',(0,o.kt)("inlineCode",{parentName:"p"},"<appName>"),", ie. ",(0,o.kt)("inlineCode",{parentName:"p"},"balena push <username>/<appName>"))),(0,o.kt)("h3",{id:"upgrading-via-one-click"},"Upgrading via one-click"),(0,o.kt)("p",null,"To update your application via one-click deploy just click the Deploy with balena button below. Make sure you select your already existing balenaSound application so you don't create a new one!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balenalabs/balena-sound&defaultDeviceType=raspberry-pi"},(0,o.kt)("img",{parentName:"a",src:"https://balena.io/deploy.svg",alt:"balena deploy button"}))),(0,o.kt)("h2",{id:"having-trouble"},"Having trouble?"),(0,o.kt)("p",null,"If you are running into issues getting your balenaSound app running, please try the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check the ",(0,o.kt)("a",{parentName:"li",href:"support"},"support and troubleshooting guide")," for common issues and how to resolve them."),(0,o.kt)("li",{parentName:"ol"},"Post in the ",(0,o.kt)("a",{parentName:"li",href:"https://forums.balena.io/c/balenalabs/balenasound/85"},"balenaSound forum")," for help from our growing community."),(0,o.kt)("li",{parentName:"ol"},"Create an issue on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/balena-labs-projects/balena-sound/issues/new/choose"},"balenaSound GitHub project")," if you find your issue may be a problem with balenaSound.")))}d.isMDXComponent=!0}}]);