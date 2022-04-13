"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[258],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"user_guide_screenplay_webtesting",sidebar_position:2},c="Web Testing with Serenity Screenplay",l={unversionedId:"screenplay/user_guide_screenplay_webtesting",id:"screenplay/user_guide_screenplay_webtesting",isDocsHomePage:!1,title:"Web Testing with Serenity Screenplay",description:"Interacting with a web page",source:"@site/docs/screenplay/screenplay-webdriver.md",sourceDirName:"screenplay",slug:"/screenplay/user_guide_screenplay_webtesting",permalink:"/documentation/docs/screenplay/user_guide_screenplay_webtesting",editUrl:"https://github.com/serenity-bdd/documentation/docs/screenplay/screenplay-webdriver.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"user_guide_screenplay_webtesting",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Screenplay Fundamentals",permalink:"/documentation/docs/screenplay/screenplay_fundamentals"}},p=[{value:"Interacting with a web page",id:"interacting-with-a-web-page",children:[{value:"Opening a URL",id:"opening-a-url",children:[]}]},{value:"Grouping Interactions into Tasks",id:"grouping-interactions-into-tasks",children:[{value:"Using the Tasks class",id:"using-the-tasks-class",children:[]},{value:"Creating your own Performables",id:"creating-your-own-performables",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"web-testing-with-serenity-screenplay"},"Web Testing with Serenity Screenplay"),(0,i.kt)("h2",{id:"interacting-with-a-web-page"},"Interacting with a web page"),(0,i.kt)("p",null,"Web tests are a common use case for Screenplay scenarios, where we try to model user behaviour and interactions with the system. In this section, we will learn how to interact with a web application using the Screenplay WebDriver integration."),(0,i.kt)("h3",{id:"opening-a-url"},"Opening a URL"),(0,i.kt)("h4",{id:"opening-a-url-directly"},"Opening a URL directly"),(0,i.kt)("p",null,"In Screenplay, you open a new page using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Open")," interaction class. This can work with a URL, e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'toby.attemptsTo(Open.url("https://todomvc.com/examples/angularjs/#/"));\n')),(0,i.kt)("h4",{id:"opening-the-url-of-a-page-object"},"Opening the URL of a Page Object"),(0,i.kt)("p",null,"If you have defined a Page Object with a default url, you can open a page object by referring to the page object class. Suppose we have defined the following Serenity Page Object, and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"@DefaultUrl")," value to the TodoMVC application URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@DefaultUrl("https://todomvc.com/examples/angularjs/#/")\npublic class TodoMvcPage extends PageObject {}\n')),(0,i.kt)("p",null,"We can now open this page using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Open.browserOn()")," method, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"toby.attemptsTo(Open.browserOn().the(TodoMvcPage.class));\n")),(0,i.kt)("h4",{id:"using-named-pages"},"Using named pages"),(0,i.kt)("p",null,"Sometimes it can be convenient to store the URLs for different environments or servers in the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file, and refer to them by the name of the property in our test code. "),(0,i.kt)("p",null,"For example, imagine we wanted to run our tests against the Angular, React and Polymer implementations of the TodoMVC app. Each application has a different URL, that we could store in the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'pages {\n    angular = "https://todomvc.com/examples/angularjs/#/"\n    react = "https://todomvc.com/examples/react/#/"\n    polymer = "https://todomvc.com/examples/polymer/index.html"\n}\n')),(0,i.kt)("p",null,"Next, we can refer to these properties in our code using the ",(0,i.kt)("inlineCode",{parentName:"p"},"thePageNamed()")," method, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'toby.attemptsTo(Open.browserOn().thePageNamed("pages.react"));\n')),(0,i.kt)("h2",{id:"grouping-interactions-into-tasks"},"Grouping Interactions into Tasks"),(0,i.kt)("h3",{id:"using-the-tasks-class"},"Using the Tasks class"),(0,i.kt)("h3",{id:"creating-your-own-performables"},"Creating your own Performables"))}d.isMDXComponent=!0}}]);