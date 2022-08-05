"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[8360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,b=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7041:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={id:"lambdatest",title:"LambdaTest",sidebar_position:2},o="Serenity BDD LambdaTest Integration",s={unversionedId:"cloud/lambdatest",id:"cloud/lambdatest",isDocsHomePage:!1,title:"LambdaTest",description:"LambdaTest is a cloud platform for test execution and test orchestration. With LambdaTest, Serenity users can extend their automation test coverage of their web and mobile apps on 3000+ real devices, browsers, and operating systems.",source:"@site/docs/cloud/lambdatest.md",sourceDirName:"cloud",slug:"/cloud/lambdatest",permalink:"/documentation/docs/cloud/lambdatest",editUrl:"https://github.com/serenity-bdd/documentation/docs/cloud/lambdatest.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lambdatest",title:"LambdaTest",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Selenium Grid",permalink:"/documentation/docs/cloud/selenium-grid"},next:{title:"BrowserStack",permalink:"/documentation/docs/cloud/browserstack"}},l=[{value:"Adding the Lambdatest plugin",id:"adding-the-lambdatest-plugin",children:[]},{value:"Specifying your LambdaTest credentials and grid URL",id:"specifying-your-lambdatest-credentials-and-grid-url",children:[]},{value:"Configuring the LambdaTest driver",id:"configuring-the-lambdatest-driver",children:[]},{value:"Activating the LambdaTest plugin",id:"activating-the-lambdatest-plugin",children:[]},{value:"Defining LambdaTest Capabilities",id:"defining-lambdatest-capabilities",children:[]}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"serenity-bdd-lambdatest-integration"},"Serenity BDD LambdaTest Integration"),(0,i.kt)("p",null,"LambdaTest is a cloud platform for test execution and test orchestration. With LambdaTest, Serenity users can extend their automation test coverage of their web and mobile apps on 3000+ real devices, browsers, and operating systems."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity-lambdatest")," plugin provides seamless integration with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.lambdatest.com/"},"LambdaTest")," online test automation platform. "),(0,i.kt)("h2",{id:"adding-the-lambdatest-plugin"},"Adding the Lambdatest plugin"),(0,i.kt)("p",null,"To add the integrated support for LambdaTest to your project, you will need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity-lambdatest")," dependency to your project dependencies. For Maven, you would add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>net.serenity-bdd</groupId>\n        <artifactId>serenity-lambdatest</artifactId>\n        <version>${serenity.version}</version>\n    </dependency>\n")),(0,i.kt)("p",null,"And for Gradle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'    testImplementation "net.serenity-bdd:serenity-lambdatest:${serenityVersion}"\n')),(0,i.kt)("h2",{id:"specifying-your-lambdatest-credentials-and-grid-url"},"Specifying your LambdaTest credentials and grid URL"),(0,i.kt)("p",null,"Next, you will need a ",(0,i.kt)("a",{parentName:"p",href:"https://accounts.lambdatest.com/register"},"LambdaTest account")," (If you don't already have one you can set up a free lifetime account to experiment). "),(0,i.kt)("p",null,"You can add your ",(0,i.kt)("a",{parentName:"p",href:"https://www.lambdatest.com/support/docs/using-environment-variables-for-authentication-credentials/"},"LambdaTest credentials")," in two ways. The simplest is to define the following system properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LT_USERNAME")," - LambdaTest user name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LT_ACCESS_KEY"),"- LambdaTest access key")),(0,i.kt)("p",null,"Alternatively, you can define your username and accesskey using the ",(0,i.kt)("inlineCode",{parentName:"p"},"lt.user")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lt.key")," properties respectively in your ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"lt.user=myuser\nlt.key=XXXXXXXX\n")),(0,i.kt)("p",null,'By default the standard LambdaTest grid URL ("hub.lambdatest.com") will be used to connect to the LambdaTest servers, but you can override this by setting the ',(0,i.kt)("inlineCode",{parentName:"p"},"lt.grid")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'lt.grid = "mycustomhub.lambdatest.com"\n')),(0,i.kt)("h2",{id:"configuring-the-lambdatest-driver"},"Configuring the LambdaTest driver"),(0,i.kt)("p",null,"Serenity interacts with LambdaTest via the ",(0,i.kt)("inlineCode",{parentName:"p"},"RemoteDriver")," driver. You can specify the remote URL explicitly, or let the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity-lambdatest")," library do it for you. For example, to configure the URL explicitly you could use a ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," configuration like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  driver = remote\n  remote.url = "https://"${LT_USERNAME}":"${LT_ACCESS_KEY}"@hub.lambdatest.com/wd/hub"\n}\n')),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"webdriver.remote.url")," property is not defined, Serenity will use these values to build one for you if the LambdaTest plugin is active (see below)."),(0,i.kt)("h2",{id:"activating-the-lambdatest-plugin"},"Activating the LambdaTest plugin"),(0,i.kt)("p",null,"The Serenity LambdaTest plugin will be invoked if Serenity can find a ",(0,i.kt)("inlineCode",{parentName:"p"},'"LT:Options"')," section in your ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file, or if you specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"remote.webdriver.url")," that points to a LambdaTest server. If you have no LambdaTest-specific capabilities, simply set the ",(0,i.kt)("inlineCode",{parentName:"p"},"lambdatest.active")," property to true like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"lambdatest {\n  active = true\n}\n")),(0,i.kt)("h2",{id:"defining-lambdatest-capabilities"},"Defining LambdaTest Capabilities"),(0,i.kt)("p",null,"You can specify the operating system and browser you want to run your tests on by customising the ",(0,i.kt)("a",{parentName:"p",href:"https://www.lambdatest.com/support/docs/selenium-automation-capabilities/"},"Selenium Capabilities")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file. You do this in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"LT:Options"')," section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'    webdriver {\n      driver = "remote"\n      capabilities {\n        browserName = "chrome"\n        version = "104.0"\n        platform = "Windows 10"\n        #\n        # Any LambdaTest-specific options go in the \'LT:Options\' section\n        #\n        "LT:Options" {\n          resolution", "1280x800"\n          network = true // To enable network logs\n          visual = true // To enable step by step screenshot\n          video = true // To enable video recording\n          console = true // To capture console logs\n        }\n      }\n    }\n')),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"w3c")," option will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," by default, as this is the default protocol for the Selenium version integrated with Serenity."),(0,i.kt)("p",null,"The LambdaTest test name will be assigned automatically. You can also set the ",(0,i.kt)("em",{parentName:"p"},"build")," name by assigning the ",(0,i.kt)("inlineCode",{parentName:"p"},"lambdatest.build")," property.\nFor example the following example shows how to create a build name from the Jenkins job name and build number environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'lambdatest {\n  build = "${JOB_NAME} - build ${BUILD_NUMBER}"\n}\n')),(0,i.kt)("p",null,"These properties will be placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"LT:Options")," capability."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"LambdaTest provides a convenient ",(0,i.kt)("a",{parentName:"p",href:"https://www.lambdatest.com/capabilities-generator/"},"Capabilities Generator")," that gives an idea of what options are available."))))}p.isMDXComponent=!0}}]);