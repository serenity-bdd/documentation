"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[809],{4051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"What's New In Serenity 3.1.0",description:"Serenity 3.1.0",slug:"whats-new-in-serenity-3.1.0",authors:["wakaleo"],tags:["reporting","locatorless-elements","selenium-4"],image:"serenity-feature-result.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/whats-new-in-serenity-3.1.0",editUrl:"https://johnfergusonsmart.com/blog/blog/2021-11-27/index.md",source:"@site/blog/2021-11-27/index.md",title:"What's New In Serenity 3.1.0",description:"Serenity 3.1.0",date:"2021-11-27T00:00:00.000Z",formattedDate:"November 27, 2021",tags:[{label:"reporting",permalink:"/blog/tags/reporting"},{label:"locatorless-elements",permalink:"/blog/tags/locatorless-elements"},{label:"selenium-4",permalink:"/blog/tags/selenium-4"}],readingTime:5.355,truncated:!0,authors:[{name:"John Ferguson Smart",title:"Creator of Serenity BDD",url:"https://github.com/wakaleo",imageURL:"https://avatars.githubusercontent.com/u/55986",key:"wakaleo"}]},d={authorsImageUrls:[void 0]},c=[{value:"Selenium 4 Integration",id:"selenium-4-integration",children:[]},{value:"Improved Reporting",id:"improved-reporting",children:[{value:"Test Duration Reports",id:"test-duration-reports",children:[]},{value:"Accessibility Mode",id:"accessibility-mode",children:[]},{value:"Better Test Result Reporting",id:"better-test-result-reporting",children:[]}]},{value:"Improved WebDriverManager integration",id:"improved-webdrivermanager-integration",children:[]},{value:"Locatorless Web Elements",id:"locatorless-web-elements",children:[]},{value:"Single Browser Mode",id:"single-browser-mode",children:[]},{value:"Want to learn more?",id:"want-to-learn-more",children:[]}],p={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Serenity BDD is one of the most popular Java test automation libraries, and for good reason!"),(0,i.kt)("p",null,"If you are writing automated web tests in Java, using Serenity BDD correctly can reduce the amount of code you need to write by well over 50%, slashing the amount of code you need to maintain yourself. Serenity BDD produces powerful test reports that you can use both as as evidence of your testing activities and documentation of your application. And with over a million downloads a month, regular releases and a vibrant open source community, it's a solid bet for your test automation framework!"),(0,i.kt)("p",null,"In this article, we look at some of the new features in Serenity BDD version 3.1.0."),(0,i.kt)("h2",{id:"selenium-4-integration"},"Selenium 4 Integration"),(0,i.kt)("p",null,"Serenity 3.1.0 introduces support for Selenium 4.0.0 and Appium 8.0.0-BETA. Selenium 4 is the long-awaited update to Selenium, and includes many new features such as relative locators, better Docker integration with Selenium Grid."),(0,i.kt)("h2",{id:"improved-reporting"},"Improved Reporting"),(0,i.kt)("p",null,"Serenity BDD is known for its powerful reporting and living documentation features, and in Serenity 3.1.0 the reports have been updated and improved, with many new features and an updated look and feel.\n",(0,i.kt)("img",{src:n(2187).Z})),(0,i.kt)("h3",{id:"test-duration-reports"},"Test Duration Reports"),(0,i.kt)("p",null,"A new chart has been added to show test duration more clearly. You can also drill down into any of the duration buckets to see which tests are slow.\n",(0,i.kt)("img",{src:n(4704).Z})),(0,i.kt)("h3",{id:"accessibility-mode"},"Accessibility Mode"),(0,i.kt)("p",null,"Serenity BDD 3.1.0 introduces the option to use patterns as well as colours in the charts to make them easier to read for colour vision deficient viewers. You can activate this mode by setting the setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.report.accessibility")," property to true."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1220).Z})),(0,i.kt)("h3",{id:"better-test-result-reporting"},"Better Test Result Reporting"),(0,i.kt)("p",null,"The test results for individual features has also been improved to include the additional reporting elements:\n",(0,i.kt)("img",{src:n(3497).Z})),(0,i.kt)("p",null,"Scenario and example outcomes are also colour-coded to make it easier to see the results at a glance:\n",(0,i.kt)("img",{src:n(7815).Z})),(0,i.kt)("h2",{id:"improved-webdrivermanager-integration"},"Improved WebDriverManager integration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bonigarcia/webdrivermanager"},"WebDriverManager")," has a lot of new Selenium 4 features, including the ability to setup a docker instance on the fly. Serenity 3.1.0 provides smooth integration with WebDriverManager with the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebDriverManagerEnhancer")," interface. Just create your own implementation of this interface, and place the implementation in a package that you specify in the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.extension.packages")," property. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class SampleWebDriverManagerEnhancer implements WebDriverManagerEnhancer {\n    @Override\n    public WebDriverManager apply(WebDriverManager webDriverManager) {\n        return webDriverManager.browserInDocker().enableVnc().enableRecording();\n    }\n}\n")),(0,i.kt)("h2",{id:"locatorless-web-elements"},"Locatorless Web Elements"),(0,i.kt)("p",null,"Locatorless web elements are a convenient way Serenity Screenplay lets us locate commonly used elements on a page without needing to write complicated CSS or XPath selectors."),(0,i.kt)("p",null,"For example, consider the following page:\n",(0,i.kt)("img",{src:n(6637).Z})),(0,i.kt)("p",null,"We could locate and click on the Checkout button with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actor.attemptsTo(\n    Click.on(Button.called("Checkout"))\n);\n')),(0,i.kt)("p",null,"Elements are located by human-readable names, which can correspond to the visible text in the element, or an attribute such as id, value or data-test. Heuristic rules are used to determine appropriate locator strategies for different elements."),(0,i.kt)("p",null,"In other cases, we may want to be more precise. For example, we can also identify form elements by their value or their label:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actor.attemptsTo(\n    Click.on(Checkbox.withLabel("Terms and conditions"))\n);\n')),(0,i.kt)("p",null,'We can also locate elements that are nested inside other elements. For example, the following page contains several "Add to cart" buttons:\n',(0,i.kt)("img",{src:n(9045).Z})),(0,i.kt)("p",null,'However, using locatorless elements, we could click on a specific "Add to cart" button like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actor.attemptsTo(\n    Click.on(Button.called("Add to cart")\n           .inside(PageElement.called("inventory_item")\n                                         .containingText("Sauce Labs Backpack"))\n    )\n);\n')),(0,i.kt)("p",null,"Locatorless elements can help make your code both easier to read and quicker to write, and also more robust, since they may try more than one locator strategy to locate the element you are looking for."),(0,i.kt)("p",null,"Supported elements include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button"),(0,i.kt)("li",{parentName:"ul"},"Checkbox"),(0,i.kt)("li",{parentName:"ul"},"Dropdown"),(0,i.kt)("li",{parentName:"ul"},"Image"),(0,i.kt)("li",{parentName:"ul"},"InputField"),(0,i.kt)("li",{parentName:"ul"},"Link"),(0,i.kt)("li",{parentName:"ul"},"RadioButton"),(0,i.kt)("li",{parentName:"ul"},"PageElement")),(0,i.kt)("h2",{id:"single-browser-mode"},"Single Browser Mode"),(0,i.kt)("p",null,"Sometimes it is useful to be able to run a series of tests in the same browser. This can speed up the tests, though it is important not to allow dependencies to occur between the tests."),(0,i.kt)("p",null,"To maintain a test open for the duration of a feature or scenario outline, just add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@singlebrowser")," tag, as in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Feature: Login\n\n  Rule: Customers needs to provide valid credentials to access the site\n\n    Example: Colin logs in with valid credentials\n      Given Colin is on the login page\n      When Colin logs in with valid credentials\n      Then he should be presented the product catalog\n\n    @singlebrowser\n    Scenario Outline: Login on with invalid credentials\n      Given Colin is on the login page\n      When Colin attempts to login with the following credentials:\n        | username   | password   |\n        | <username> | <password> |\n      Then he should be presented with the error message <message>\n      Examples:\n        | username        | password       | message                                                     |\n        | standard_user   | wrong_password | Username and password do not match any user in this service |\n        | unknown_user    | secret_sauce   | Username and password do not match any user in this service |\n        | unknown_user    | wrong_password | Username and password do not match any user in this service |\n        | locked_out_user | secret_sauce   | Sorry, this user has been locked out.                       |\n")),(0,i.kt)("p",null,"In JUnit you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@SingleBrowser")," annotation for the same result, as shown in this JUnit 5 test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@ExtendWith(SerenityJUnit5Extension.class)\n@SingleBrowser\npublic class WhenLoggingOn {\n\n    @Managed(options = "headless")\n    WebDriver driver;\n\n    @CastMember\n    Actor charles;\n\n    @ParameterizedTest(name = "{index}: {2}")\n    @CsvSource(value = {\n            "                       ,secret_sauce       , Username is required",\n            "standard_user  ,                          , Password is required",\n            "                       ,                          , Username is required",\n            "standard_user  , wrong_password , Username and password do not match any user in this service",\n            "wrong_user     , secret_sauce       , Username and password do not match any user in this service",\n    })\n    public void withInvalidCredentials(String username, String password, String errorMessage) {\n        charles.attemptsTo(\n                Login.withCredentials(username, password),\n                Ensure.that(LoginForm.ERROR_MESSAGE).text().contains(errorMessage)\n        );\n    }\n}\n')),(0,i.kt)("h2",{id:"want-to-learn-more"},"Want to learn more?"),(0,i.kt)("p",null,"There are several courses on Serenity BDD in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com"},"Serenity Dojo Training Library")),", including"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/serenity-and-the-screenplay-pattern"},"Write Better Automated Tests Faster With Serenity BDD, Cucumber and The Screenplay Pattern"))," - a free deep-dive course into writing scalable, maintainable tests with Serenity BDD and the Screenplay pattern"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/testing-web-applications-with-serenity-bdd"},"Effective UI Test Automation With Serenity BDD and Selenium"))," - learn the fundamentals of web testing with Serenity BDD in this very detailed course."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/writing-more-sustainable-tests-with-the-screenplay-pattern"},"Next-generation Automated Acceptance Tests With Serenity Screenplay"))," - Learn everything you need to know to master scalable test automation with the powerful Screenplay pattern."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://expansion.serenity-dojo.com/courses/testing-rest-apis-with-serenity-bdd"},"Testing REST APIs with Serenity BDD and RestAssured"))," - Learn how to test REST web services in Serenity BDD.")))}m.isMDXComponent=!0},6637:function(e,t,n){t.Z=n.p+"assets/images/saucelabs-example-546565aa83a0d0ca2d9f303bb235ac2f.png"},9045:function(e,t,n){t.Z=n.p+"assets/images/saucelabs-example2-11f7daeced572c8dd2ac693fd51533a3.png"},4704:function(e,t,n){t.Z=n.p+"assets/images/serenity-durations-b953b439a127a1d8a705f54991f32553.png"},7815:function(e,t,n){t.Z=n.p+"assets/images/serenity-example-results-color-coded-371708280cec4b286582b84f6a08aefa.png"},3497:function(e,t,n){t.Z=n.p+"assets/images/serenity-feature-result-3143a96bb2bfc75e0e537967f1c08f39.png"},1220:function(e,t,n){t.Z=n.p+"assets/images/serenity-patterns-66f8dd4f93e84dbd7f36d0d69e6c6206.png"},2187:function(e,t,n){t.Z=n.p+"assets/images/serenity-report-overview-8bda16e856a9c20822356ea9cdfaf341.png"}}]);