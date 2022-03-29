"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[196],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"getting_started",title:"Creating A New Project",sidebar_position:2},l="Getting Started",c={unversionedId:"guide/getting_started",id:"guide/getting_started",isDocsHomePage:!1,title:"Creating A New Project",description:"Creating A New Project With The Serenity BDD Templates",source:"@site/docs/guide/getting-started.md",sourceDirName:"guide",slug:"/guide/getting_started",permalink:"/documentation/docs/guide/getting_started",editUrl:"https://github.com/serenity-bdd/documentation/docs/guide/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"getting_started",title:"Creating A New Project",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/documentation/docs/guide/user_guide_intro"},next:{title:"Using Maven with Serenity",permalink:"/documentation/docs/guide/maven"}},u=[{value:"Creating A New Project With The Serenity BDD Templates",id:"creating-a-new-project-with-the-serenity-bdd-templates",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h2",{id:"creating-a-new-project-with-the-serenity-bdd-templates"},"Creating A New Project With The Serenity BDD Templates"),(0,i.kt)("p",null,"The quickest way to get started with a Serenity BDD project is to use one of the starter projects. These are template projects available on Github, that contain a basic Serenity BDD skeleton project and a single test implementation. These template projects are kept up-to-date with the most recent stable version of Serenity BDD."),(0,i.kt)("p",null,"The main available starter projects are the following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Template"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Get Started"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/serenity-bdd/serenity-junit-starter"},"Serenity BDD with JUnit")),(0,i.kt)("td",{parentName:"tr",align:null},"A simple project structure using Serenity BDD, JUnit 5 and an Action Classes/Page Objects architecture."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/serenity-bdd/serenity-junit-starter/generate"},"Use This Template")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/serenity-bdd/serenity-junit-screenplay-starter"},"Serenity BDD with JUnit and Screenplay")),(0,i.kt)("td",{parentName:"tr",align:null},"A project built around the Screenplay Pattern using Serenity BDD, JUnit 5 and Serenity Screenplay"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/serenity-bdd/serenity-junit-screenplay-starter/generate"},"Use This Template")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/serenity-bdd/serenity-cucumber-starter"},"Serenity BDD with Cucumber and Screenplay")),(0,i.kt)("td",{parentName:"tr",align:null},"A BDD-style test suite using Cucumber and Serenity Screenplay"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/serenity-bdd/serenity-cucumber-starter/generate"},"Use This Template")))))),(0,i.kt)("p",null,'To create a new project, go to the project template you want to use, and click on the "Use this template" button. This will allow you to create a new project in your own Github repository.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9439).Z})),(0,i.kt)("p",null,'If you are working on an internal project, you can also download the template project by clicking on the "Code" button.'))}d.isMDXComponent=!0},9439:function(e,t,n){t.Z=n.p+"assets/images/use-this-template-b91f3485ec2364cc4043325571424197.png"}}]);