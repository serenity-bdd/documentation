"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5258:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},s="Your First Web Test",o={unversionedId:"tutorials/first_test",id:"tutorials/first_test",isDocsHomePage:!1,title:"Your First Web Test",description:"In this tutorial you'll write your very first Serenity BDD test, using JUnit 5 and Selenium. We'll start out simple, then explore some of the features that make Serenity BDD rather special. So lets get started!",source:"@site/docs/tutorials/first_test.md",sourceDirName:"tutorials",slug:"/tutorials/first_test",permalink:"/docs/tutorials/first_test",editUrl:"https://github.com/serenity-bdd/docs/tutorials/first_test.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Your First Screenplay Scenario",permalink:"/docs/tutorials/screenplay"}},l=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Creating Your First Serenity BDD Project",id:"creating-your-first-serenity-bdd-project",children:[]},{value:"Writing a simple test",id:"writing-a-simple-test",children:[{value:"Basic test structure",id:"basic-test-structure",children:[]},{value:"Setting up WebDriver",id:"setting-up-webdriver",children:[]},{value:"Creating Action Classes",id:"creating-action-classes",children:[]},{value:"Creating a Page Component class",id:"creating-a-page-component-class",children:[]},{value:"Using Action Classes and Page Components In The Test",id:"using-action-classes-and-page-components-in-the-test",children:[]},{value:"Reporting the steps",id:"reporting-the-steps",children:[]},{value:"Reporting on assertions",id:"reporting-on-assertions",children:[]}]},{value:"Generating the reports",id:"generating-the-reports",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"your-first-web-test"},"Your First Web Test"),(0,i.kt)("p",null,"In this tutorial you'll write your very first Serenity BDD test, using JUnit 5 and Selenium. We'll start out simple, then explore some of the features that make Serenity BDD rather special. So lets get started!"),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"To run this tutorial, you will need a few things installed on your machine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Java"),": Serenity BDD is a Java library, so you'll need a recent JDK installed. JDK 1.8 or higher should be fine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A Java IDE"),": You'll also need a Java Development Environment such as IntelliJ or Eclipse (and a working knowledge of Java)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Git"),": We'll be using a starter project on Github, and the sample code for this project lives on Github too, so I'll be assuming you have a basic understanding of Git.")),(0,i.kt)("h2",{id:"creating-your-first-serenity-bdd-project"},"Creating Your First Serenity BDD Project"),(0,i.kt)("p",null,"We will be using the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/serenity-bdd/serenity-junit-screenplay-starter"},"Serenity BDD with JUnit and Screenplay"))," template project to get a simple project up and running quickly."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We'll be using a fairly conventional test automation style in this tutorial, using action classes and page objects. In the next tutorial we'll see how to do all this using the Screenplay Pattern."))),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serenity-bdd/serenity-junit-screenplay-starter"},"project template page on Githuib")," and click on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serenity-bdd/serenity-junit-screenplay-starter/generate"},"Use This Template"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3173).Z})),(0,i.kt)("h2",{id:"writing-a-simple-test"},"Writing a simple test"),(0,i.kt)("p",null,'Let\'s start with a simple test. We will run a simple search for the keyword "Cucumber" on the DuckDuckGo search engine:\n',(0,i.kt)("img",{src:n(1805).Z})),(0,i.kt)("p",null,"First of all, we create a new package for our DuckDuckGo tests. The Serenity test reports mirror the directory structure we use to organise our tests, so it helps to make the structure and the package name meaningful."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(937).Z})),(0,i.kt)("h3",{id:"basic-test-structure"},"Basic test structure"),(0,i.kt)("p",null,'Now we create a new test class (let\'s call it "WhenSearchingByKeyword"), and an empty test case (we can call it "theKeywordShouldAppearInTheResultsSidebar").'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package starter.duckduckgo;\n\nimport net.serenitybdd.junit5.SerenityJUnit5Extension;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\n\n@ExtendWith(SerenityJUnit5Extension.class)              \nclass WhenSearchingByKeyword {              \n\n    @Test\n    void theKeywordShouldAppearInTheResultsSidebar() {\n\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are a few things to note here:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"@ExtendWith")," annotation tells JUnit that this test uses Serenity - don't forget this annnotation or your test won't be recognised as a Serenity test"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"@Test")," annotation uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"org.junit.jupiter.api.Test")," class, from JUnit 5. Be careful not to get this mixed up with the JUnit 4 annotation of the same name (",(0,i.kt)("inlineCode",{parentName:"li"},"org.junit.Test"),"), otherwise your test won't run.")))),(0,i.kt)("h3",{id:"setting-up-webdriver"},"Setting up WebDriver"),(0,i.kt)("p",null,"Next, let's add the code Serenity will need to work. First of all, since this will be a web test, we need to add a WebDriver field. Serenity manages the WebDriver lifecycle for us (it even downloads the WebDriver binaries for us), so all we need to do is to declare a ",(0,i.kt)("inlineCode",{parentName:"p"},"WebDriver")," field, and annotate it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Managed")," annotation. In the code below, I've also added the ",(0,i.kt)("inlineCode",{parentName:"p"},"driver")," attribute and the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," attribute to ensure the browser opens in headless mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@ExtendWith(SerenityJUnit5Extension.class)\nclass WhenSearchingByKeyword {\n\n    @Managed(driver = "chrome", options = "headless")\n    WebDriver driver;\n\n    @Test\n    void theKeywordShouldAppearInTheResultsSidebar() {\n\n    }\n}\n')),(0,i.kt)("p",null,"This driver will be used throughout the test, including in any page objects or action classes (more on these later) that are created as part of the test."),(0,i.kt)("h3",{id:"creating-action-classes"},"Creating Action Classes"),(0,i.kt)("p",null,"We could simply start using this ",(0,i.kt)("inlineCode",{parentName:"p"},"driver")," variable to interact with the browser. That would work fine. But keeping your test code well organised and well structured is essential to keeping maintenance costs down. And Serenity BDD gives us a number of ways to do this."),(0,i.kt)("p",null,"One of the simplest ways to do this is called ",(0,i.kt)("em",{parentName:"p"},"Action Classes"),". Action Classes are small, reusable classes with methods that encapsulate key user actions."),(0,i.kt)("p",null,"For example, we could break this test down into three steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the DuckDuckGo home page"),(0,i.kt)("li",{parentName:"ul"},'Search by the keyword "Cucumber"'),(0,i.kt)("li",{parentName:"ul"},'Check that the main topic heading on the result page is "Cucumber"')),(0,i.kt)("p",null,"Let's start with the first action: navigating to the DuckDuckGo home page. Create a new class called ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigateActions")," in the same package and add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import net.serenitybdd.core.steps.UIInteractions;\n\npublic class NavigateActions extends UIInteractions {\n    public void toTheDuckDuckGoSearchPage() {\n        openUrl("https://duckduckgo.com/");\n    }\n}\n')),(0,i.kt)("p",null,"A UI Interactions class is a class containing methods that can interact with a web page. When we extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"UIInteractions")," class, Serenity will automatically inject the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Managed")," WebDriver instance we saw earlier whenever we use an instance of this class in our tests."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"UIInteractions")," class gives you access to a range of methods that you can use to interact with the page. For example, as we can see in this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"openUrl()")," method id used to open a page at a specified URL."),(0,i.kt)("p",null,"Next, lets move on to the second action, where we need to search for a specific term. Create a new class called ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchActions"),", and make it extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"UIInteractions")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import net.serenitybdd.core.steps.UIInteractions;\n\npublic class SearchActions extends UIInteractions {}\n")),(0,i.kt)("p",null,"Now add a method to search by a given keyword, called ",(0,i.kt)("inlineCode",{parentName:"p"},"byKeyword"),", which will do the actual search. Inside this method, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," notation to search for elements on the page using CSS or XPath locators, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import net.serenitybdd.core.steps.UIInteractions;\n\npublic class SearchActions extends UIInteractions {\n    public void byKeyword(String keyword) {\n      $("#search_form_input_homepage").sendKeys(keyword);\n      $(".search__button").click();      \n    }\n}\n')),(0,i.kt)("h3",{id:"creating-a-page-component-class"},"Creating a Page Component class"),(0,i.kt)("p",null,"The third step of our test is to read the title of the search results sidebar and check that it is the value we expect."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6529).Z})),(0,i.kt)("p",null,"We can do this with a Page Component object. Page Components (which extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"PageComponent")," class) are similar to action classes, but focus on reading information from a particular part of a web page, rather than modelling user interactions."),(0,i.kt)("p",null,"To read the title of the sidebar in this screen, create a new class called ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchResultSidebar")," with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import net.serenitybdd.core.pages.PageComponent;\n\npublic class SearchResultSidebar extends PageComponent {\n    public String heading() {\n        return $(".module__title").getText();\n    }\n}\n')),(0,i.kt)("p",null,"Once again we are locating the element using the ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," operator and a CSS selector, and returning the text value of the element we find."),(0,i.kt)("h3",{id:"using-action-classes-and-page-components-in-the-test"},"Using Action Classes and Page Components In The Test"),(0,i.kt)("p",null,"Now that we've created action classes for the first two steps, let's add them to our test. Serenity recognises action classes and page component objects and instantiates them automatically with the @Managed WebDriver instance, so we simply need to declare them as class fields, and then use them in our test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import net.serenitybdd.junit5.SerenityJUnit5Extension;\nimport org.junit.jupiter.api.Test;\nimport net.thucydides.core.annotations.Managed;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.openqa.selenium.WebDriver;\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@ExtendWith(SerenityJUnit5Extension.class)\nclass WhenSearchingByKeyword {\n\n    @Managed(driver = "chrome", options = "headless")\n    WebDriver driver;\n\n    NavigateActions navigate;\n    SearchActions search;\n    SearchResultSidebar searchResultSidebar;\n\n    @Test\n    void theKeywordShouldAppearInTheResultsSidebar() {\n        navigate.toTheDuckDuckGoSearchPage();\n        search.byKeyword("Cucumber");\n        assertThat(searchResultSidebar.heading()).isEqualTo("Cucumber");\n    }\n}\n')),(0,i.kt)("h3",{id:"reporting-the-steps"},"Reporting the steps"),(0,i.kt)("p",null,"We now have a working test. You can run it from within your IDE, or by running ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn verify")," on the command line."),(0,i.kt)("p",null,"However there is one more step we can do. Serenity BDD is a living documentation tool, which means it aims to document not only what tests are executed, but how they are executed."),(0,i.kt)("p",null,"We can control how Serenity reports each method in a ",(0,i.kt)("inlineCode",{parentName:"p"},"UIInteractions")," class using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Step")," annotatation. When you place a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Step")," annotation on a ",(0,i.kt)("inlineCode",{parentName:"p"},"UIInteractions")," method, this method will appear in the Serenity reports whenever it is called."),(0,i.kt)("p",null,"Let's see how it works. Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"NaviagateActions")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchActions")," classes to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Step")," annotations like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import net.serenitybdd.core.steps.UIInteractions;\nimport net.thucydides.core.annotations.Step;\n\npublic class NavigateActions extends UIInteractions {\n    @Step("Navigate to the home page")\n    public void toTheDuckDuckGoSearchPage() {\n        openUrl("https://duckduckgo.com/");\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import net.serenitybdd.core.steps.UIInteractions;\nimport net.thucydides.core.annotations.Step;\n\npublic class SearchActions extends UIInteractions {\n    @Step("Search for \'{0}\'")\n    public void byKeyword(String keyword) {\n        $("#search_form_input_homepage").sendKeys(keyword);\n        $(".search__button").click();\n    }\n}\n')),(0,i.kt)("h3",{id:"reporting-on-assertions"},"Reporting on assertions"),(0,i.kt)("p",null,"The last step of our test is an assertion. We can report on the assertion by wrapping it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Serenity.reportThat()")," method, using a Lambda expression for the actual assertion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Test\nvoid theKeywordShouldAppearInTheResultsSidebar() {\n    navigate.toTheDuckDuckGoSearchPage();\n    search.byKeyword("Cucumber");\n\n    Serenity.reportThat("The keyword should appear in the sidebar heading",\n            () -> assertThat(searchResultSidebar.heading()).isEqualTo("Cucumber")\n    );\n}\n')),(0,i.kt)("h2",{id:"generating-the-reports"},"Generating the reports"),(0,i.kt)("p",null,"Let's run the tests and see what the reports look like. Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"wikipedia")," package (we don't need the sample tests any more), and run ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn verify")," from the command line. You should see an output along the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ mvn verify\n...\n[INFO]  SERENITY TESTS: SUCCESS\n[INFO] -----------------------------------------\n[INFO] | Tests executed         | 1\n[INFO] | Tests passed           | 1\n[INFO] | Tests failed           | 0\n[INFO] | Tests with errors      | 0\n[INFO] | Tests compromised      | 0\n[INFO] | Tests aborted          | 0\n[INFO] | Tests pending          | 0\n[INFO] | Tests ignored/skipped  | 0\n[INFO] ------------------------ | --------------\n[INFO] | Total Duration         | 5s 626ms\n[INFO] | Fastest test took      | 5s 626ms\n[INFO] | Slowest test took      | 5s 626ms\n[INFO] -----------------------------------------\n[INFO]\n[INFO] SERENITY REPORTS\n[INFO]   - Full Report: file:///Users/john/Projects/Serenity/serenity-new-documentation/serenity-users-guide/sample-code/docs-starter-tutorial/target/site/serenity/index.html\n[INFO]\n[INFO] --- maven-failsafe-plugin:3.0.0-M5:verify (default) @ serenity-junit-starter ---\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  21.729 s\n[INFO] Finished at: 2021-11-30T11:27:29Z\n[INFO] ------------------------------------------------------------------------\n")),(0,i.kt)("p",null,"Now open the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"target/site/serenity")," directory. You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3486).Z})),(0,i.kt)("p",null,'Click on the "Test Results" tab and open the "When Searching By Keyword" scenario. This should show you the step-by-step details of your test:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9302).Z})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Congratulation! You've written your first Serenity BDD test, and seen a little of what Serenity BDD can do!"))}p.isMDXComponent=!0},1805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/duckduckgo-a3952f7d3a0d8c6c69d13048464bd77f.png"},937:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/initial-directory-structure-5594717c5b01c98f370425231755bbc1.png"},3173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/junit-template-d226d0f6d4fea808234dcf35eb4289e8.png"},3486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/report-home-d26d2a22a877e74f29fa84ed09c95064.png"},9302:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/report-keyword-search-17f54186a2a9191515c18ac7d2a5a23c.png"},6529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result-module-title-0470327ec1b80975ef1f0e81aae5b74c.png"}}]);