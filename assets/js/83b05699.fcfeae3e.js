"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[857],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"user_guide_intro",title:"Introduction",sidebar_position:1},u="Introduction",c={unversionedId:"guide/user_guide_intro",id:"guide/user_guide_intro",isDocsHomePage:!1,title:"Introduction",description:"Serenity BDD is an open source library that aims to make the idea of living documentation a reality.",source:"@site/docs/guide/intro.md",sourceDirName:"guide",slug:"/guide/user_guide_intro",permalink:"/documentation/docs/guide/user_guide_intro",editUrl:"https://github.com/serenity-bdd/documentation/docs/guide/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"user_guide_intro",title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started With Cucumber",permalink:"/documentation/docs/tutorials/cucumber"},next:{title:"Creating A New Project",permalink:"/documentation/docs/guide/getting_started"}},l=[],d={toc:l};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Serenity BDD is an open source library that aims to make the idea of living documentation a reality."),(0,o.kt)("p",null,"Serenity BDD helps you write cleaner and more maintainable automated acceptance and regression tests faster. Serenity also uses the test results to produce illustrated, narrative reports that document and describe what your application does and how it works. Serenity tells you not only what tests have been executed, but more importantly, what requirements have been tested."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6446).Z})),(0,o.kt)("p",null,"One key advantage of using Serenity BDD is that you do not have to invest time in building and maintaining your own automation framework. Serenity BDD provides strong support for different types of automated acceptance testing, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web testing with Selenium."),(0,o.kt)("li",{parentName:"ul"},"REST API testing with RestAssured."),(0,o.kt)("li",{parentName:"ul"},"Highly readable, maintainable and scalable automated testing with the Screenplay pattern."),(0,o.kt)("li",{parentName:"ul"},"BDD-style executable specifications with Cucumber")),(0,o.kt)("p",null,"Serenity not only reports on what requirements were tested, it also reports on ",(0,o.kt)("em",{parentName:"p"},"how")," they were tested. It includes step-by-step details of how a test played out, including optional screenshots, so your tests truly document what your application does."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6365).Z})),(0,o.kt)("p",null,"But Serenity is not just about reporting. The underlying aim of Serenity is to make it easy to quickly write well-structured, maintainable automated acceptance criteria, using your favourite BDD or conventional testing library. You can work with Behaviour-Driven-Development tools like Cucumber, or simply use JUnit (4 or 5). You can integrate with requirements stored in an external source (such as JIRA or any other test cases management tool), or just use a simple directory-based approach to organise your requirements."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1736).Z})),(0,o.kt)("p",null,"Serenity also provides a host of built-in features that make coding your test automation faster and more reliable. Testers working with Serenity typically report automating tests with less than half the code they would need for a conventional Selenium test."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Up until November 2014, Serenity went by the name of Thucydides. Thucydides was an Ancient Greek historian who wrote about the Peloponnesian War in the late 5th Century BCE. He was the first historian to write about events that he actually participated in, and in many cases, he wrote down the events that he directly witnessed."),(0,o.kt)("p",{parentName:"div"},"In a similar way Serenity BDD not only reports on test outcomes, but also records and documents how each scenario plays out, giving a particularly rich form of test reporting and living documentation."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6538).Z})))}p.isMDXComponent=!0},6446:function(e,t,n){t.Z=n.p+"assets/images/intro-functional-coverage-c5e00a9cb3934c95180d52eb759546f8.png"},6538:function(e,t,n){t.Z=n.p+"assets/images/intro-hoplites-85b048d25348e05c8bfda5cb3ec042b6.jpeg"},1736:function(e,t,n){t.Z=n.p+"assets/images/intro-scenario-59cf31c744cdf53f45156c70676177d8.png"},6365:function(e,t,n){t.Z=n.p+"assets/images/intro-step-details-6d3780258da747646a6da905b2f4e9b8.png"}}]);