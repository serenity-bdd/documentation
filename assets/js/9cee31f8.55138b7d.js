"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[7506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4117:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={id:"step_libraries",title:"Step Libraries",sidebar_position:4},i="Serenity Step Libraries",o={unversionedId:"guide/step_libraries",id:"guide/step_libraries",isDocsHomePage:!1,title:"Step Libraries",description:"In Serenity, tests are broken down into reusable steps. An important principle behind Serenity is the idea that it is easier to maintain a test that uses several layers of abstraction to hide the complexity behind different parts of a test.",source:"@site/docs/guide/steps.md",sourceDirName:"guide",slug:"/guide/step_libraries",permalink:"/docs/guide/step_libraries",editUrl:"https://github.com/serenity-bdd/docs/guide/steps.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"step_libraries",title:"Step Libraries",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using Maven with Serenity",permalink:"/docs/guide/maven"},next:{title:"Interacting With Web Pages",permalink:"/docs/guide/page_objects"}},l=[{value:"Breaking down tests into steps",id:"breaking-down-tests-into-steps",children:[]},{value:"Implementing Simple Step Libraries",id:"implementing-simple-step-libraries",children:[{value:"UI Interaction Classes",id:"ui-interaction-classes",children:[]},{value:"Persona Step Libraries",id:"persona-step-libraries",children:[]}]},{value:"Shared Instances of Step Libraries",id:"shared-instances-of-step-libraries",children:[]}],p={toc:l};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"serenity-step-libraries"},"Serenity Step Libraries"),(0,r.kt)("p",null,"In Serenity, tests are broken down into reusable steps. An important principle behind Serenity is the idea that it is easier to maintain a test that uses several layers of abstraction to hide the complexity behind different parts of a test."),(0,r.kt)("p",null,"In an automated acceptance test, test steps represent the level of abstraction between the code that interacts with your application (for example, Page Component Objects in an automated web test, which model parts of the user interface, or API endpoints for web services you need to interact with) and higher-level stories (sequences of more business-focused actions that illustrate how a given user story has been implemented). If your automated test is not UI-oriented (for example, if it calls a web service), steps orchestrate other more technical components such as REST clients. Steps can contain other steps, and are included in the Serenity reports. Whenever a UI step is executed, a screenshot is stored and displayed in the report."),(0,r.kt)("h2",{id:"breaking-down-tests-into-steps"},"Breaking down tests into steps"),(0,r.kt)("p",null,"Suppose we are testing a Frequent Flyer programme, and need to illustrate the following business rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Members should start with Bronze status"),(0,r.kt)("li",{parentName:"ul"},"Members should earn Silver status after flying 10,000 km.")),(0,r.kt)("p",null,"Each of these can be broken down further into business tasks and verifications. For example, the first rule could be broken into two steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new Frequent Flyer member"),(0,r.kt)("li",{parentName:"ul"},"Check that the member has a status of Bronze")),(0,r.kt)("p",null,"And the second can be broken into three steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new Frequent Flyer member"),(0,r.kt)("li",{parentName:"ul"},"Make the member fly 10000 km"),(0,r.kt)("li",{parentName:"ul"},"Check that the member has a status of Silver")),(0,r.kt)("p",null,"We could express these tests using Serenity in JUnit as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package flyer;\n\nimport net.serenitybdd.junit.runners.SerenityRunner;\nimport net.thucydides.core.annotations.Steps;\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\nimport flyer.steps.TravellerEarningStatusPoints;\n\nimport static flyer.Status.Bronze;\nimport static flyer.Status.Silver;\n\n@ExtendWith(SerenityJUnit5Extension.class)\npublic class WhenEarningFrequentFlyerPoints {\n\n    @Steps\n    TravellerEarningStatusPoints tracy;\n\n    @Test\n    public void members_should_start_with_Bronze_status() {\n        // GIVEN\n        tracy.joins_the_frequent_flyer_program();\n\n        // THEN\n        tracy.should_have_a_status_of(Bronze);\n    }\n\n    @Test\n    public void earn_silver_after_10000_kilometers() {\n        // GIVEN\n        tracy.joins_the_frequent_flyer_program();\n\n        // WHEN\n        tracy.flies(10000);\n\n        // THEN\n        tracy.should_have_a_status_of(Silver);\n    }\n}\n")),(0,r.kt)("p",null,"Notice how the second test reuses step methods used in the first to perform a slightly different test. This is a typical example of the way we reuse steps in similar tests, in order to avoid duplicated code and make the code easier to maintain."),(0,r.kt)("h2",{id:"implementing-simple-step-libraries"},"Implementing Simple Step Libraries"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TravellerEarningStatusPoints")," class is what we call a step library. We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Steps")," class as shown above to indicate a step library in our test code: this annotation tells Serenity to instantiate and instrument this field, so that methods you call in this library also appear in the test reports."),(0,r.kt)("p",null,"Step libraries contain the business tasks or actions that a user performs during a test. There are many ways to organise your step libraries, but a convenient way is to group methods in slices of business behaviour for a given type of user. In this case a traveller who is earning status points."),(0,r.kt)("p",null,"Notice that it was not necessary to explicitly instantiate the Steps class ",(0,r.kt)("inlineCode",{parentName:"p"},"TravellerEarningStatusPoints"),". When you annotated a member variable of this class with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Steps")," annotation, Serenity BDD will automatically instantiate it for you."),(0,r.kt)("p",null,"You should never create instances of step libraries using the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," keyword, as Serenity will not be able to instrument the step library correctly, and the methods called will not appear in the reports."),(0,r.kt)("p",null,"For example, suppose we want to test a simple calculator UI. In this class, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CalculatorSteps")," step library, which we annotate with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Steps")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ExtendWith(SerenityJUnit5Extension.class)\nclass WhenDoingSums {\n\n    @Steps\n    CalculatorSteps calulate;\n\n    @Nested\n    class ABasicCalculator {\n\n        @BeforeEach\n        void openTheCalculator() {\n            calulate.openTheCalculatorApp();\n        }\n\n        @Test\n        void shouldCalculateAdditions() {\n            int result = calulate.theAnswerTo("1","+","2");\n            assertThat(result).isEqualTo(3);\n        }\n\n        @Test\n        void shouldCalculateSubtractions() {\n            int result = calulate.theAnswerTo("7","-","3");\n            assertThat(result).isEqualTo(4);\n        }\n\n        @Test\n        void shouldCalculateMultiplications() {\n            int result = calulate.theAnswerTo("3","*","2");\n            assertThat(result).isEqualTo(6);\n        }\n\n        @Test\n        void shouldCalculateDivisions() {\n            int result = calulate.theAnswerTo("10","/","2");\n            assertThat(result).isEqualTo(5);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CalculatorSteps")," class defines the steps a user needs to perform - in this case, perform a calculation on the calculator app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class CalculatorSteps {\n\n    @Step("Calculate the answer to {0} {1} {2}")\n    public int theAnswerTo(String a, String operator, String b) {\n        // Interact with the the calculator to perform the calculation\n    }\n}\n')),(0,r.kt)("p",null,"Step methods are annotated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Step")," annotation, which tells Serenity to include this method in the Serenity test reports. The value we include in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Step")," annotation is the text that will appear in the Serenity reports when this step is executed. The numbers in curly brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"{0}"),",",(0,r.kt)("inlineCode",{parentName:"p"},"{1}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{2}"),") represent placeholders the method parameters, if we want them to appear in the reports."),(0,r.kt)("p",null,"When we run this test case, Serenity will document the steps that get executed during each test, producing a living documentation of the test execution:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1989).Z})),(0,r.kt)("h3",{id:"ui-interaction-classes"},"UI Interaction Classes"),(0,r.kt)("p",null,"Suppose our calculator test needs to interact with a web UI, such as the one on ",(0,r.kt)("a",{parentName:"p",href:"https://juliemr.github.io/protractor-demo/"},"https://juliemr.github.io/protractor-demo/")," shown here:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3512).Z})),(0,r.kt)("p",null,"We can access the powerful Serenity BDD Selenium integration in our step libraries by extending the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.serenitybdd.core.steps.UIInteractions")," class. A very simple implementation might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class CalculatorSteps extends UIInteractions {\n\n     @Step\n    public void openTheCalculatorApp() {\n        openUrl("https://juliemr.github.io/protractor-demo/");\n    }\n\n   @Step("Calculate the answer to {0} {1} {2}")\n    public int theAnswerTo(String firstValue, String operator, String secondValue) {\n\n        $("[ng-model=first]").sendKeys(firstValue);\n        $("[ng-model=operator]").selectByVisibleText(operator);\n        $("[ng-model=second]").sendKeys(secondValue);\n        $("#gobutton").click();\n        waitForAngularRequestsToFinish();\n\n        return Integer.parseInt($("css:h2").getText());\n    }\n}\n')),(0,r.kt)("p",null,"A more readable, refactored implementation might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class CalculatorSteps extends UIInteractions {\n\n    private static final By FIRST_VALUE_FIELD = By.cssSelector("[ng-model=first]");\n    private static final By SECOND_VALUE_FIELD = By.cssSelector("[ng-model=second]");\n    private static final By OPERATOR_DROPDOWN = By.cssSelector("[ng-model=operator]");\n    private static final By GO_BUTTON = By.id("gobutton");\n    private static final By RESULT_FIELD = By.tagName("h2");\n    private static final Pattern A_VALID_NUMBER = Pattern.compile("-?\\\\d\\\\.?d*");\n\n    @Step\n    public void openTheCalculatorApp() {\n        openUrl("https://juliemr.github.io/protractor-demo/");\n    }\n\n    @Step("Calculate the answer to {0} {1} {2}")\n    public int theAnswerTo(String firstValue, String operator, String secondValue) {\n\n        $(FIRST_VALUE_FIELD).sendKeys(firstValue);\n        $(OPERATOR_DROPDOWN).selectByVisibleText(operator);\n        $(SECOND_VALUE_FIELD).sendKeys(secondValue);\n        $(GO_BUTTON).click();\n        waitFor(ExpectedConditions.textMatches(RESULT_FIELD,A_VALID_NUMBER));\n\n        return Integer.parseInt($(RESULT_FIELD).getText());\n    }\n}\n')),(0,r.kt)("p",null,"The tests will now interact with the user interface, report on both the steps executed, and (if configured to do so) record screenshots for each step:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(742).Z})),(0,r.kt)("h3",{id:"persona-step-libraries"},"Persona Step Libraries"),(0,r.kt)("p",null,"Another approach to modeling step libraries revolves around actors and roles. Let's return to our original example: Tracy, the traveller, who earns points when she travels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TravellerEarningStatusPoints {\n\n    private String actor;\n\n    private FrequentFlyer frequentFlyer;\n\n    @Step("#actor joins the frequent flyer program")   \n    public void joins_the_frequent_flyer_program() {\n        frequentFlyer = FrequentFlyer.withInitialBalanceOf(0);\n    }\n\n    @Step("#actor flies {0} km")\n    public void flies(int distance) {\n        frequentFlyer.recordFlightDistanceInKilometers(distance);\n    }\n\n    @Step("#actor should have a status of {0}")\n    public void should_have_a_status_of(Status expectedStatus) {\n        assertThat(frequentFlyer.getStatus()).isEqualTo(expectedStatus);\n    }\n\n    @Step("#actor transfers {0} points to {1}")\n    public void transfers_points(int points, TravellerEarningStatusPoints otherFrequentFlier) {\n        // Left as an exercise\n    }\n\n    @Override\n    public String toString() {\n        return actor;\n    }\n\n    @Step("#actor should have {0} points")\n    public void should_have_points(int expectedPoints) {\n        // Left as an exercise\n    }\n}\n')),(0,r.kt)("p",null,"This approach uses the concept of ",(0,r.kt)("em",{parentName:"p"},"persona")," step libraries, where a step library represents the actions of a specific user performing a specific task (Tracy the traveller who is earning points.) In this case, Serenity will automatically instantiate the ",(0,r.kt)("em",{parentName:"p"},"actor")," field with the name of the step library variable (",(0,r.kt)("inlineCode",{parentName:"p"},"tracy"),"), allowing it to appear in the test reports to make them more readable:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4774).Z})),(0,r.kt)("h2",{id:"shared-instances-of-step-libraries"},"Shared Instances of Step Libraries"),(0,r.kt)("p",null,"There are some cases where we want to reuse the same step library instance in different places across a test. For example, suppose we have a step library that interacts with a backend API, and that maintains some internal state and caching to improve performance. We might want to reuse a single instance of this step library, rather than having a separate instance for each variable."),(0,r.kt)("p",null,"We can do this by declaring the step library to be shared, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Steps(shared = true)\nCustomerAPIStepLibrary customerAPI;\n")),(0,r.kt)("p",null,"Now, any other step libraries of type ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerAPIStepLibrary"),", that have the shared attribute set to true will refer to the same instance."),(0,r.kt)("p",null,"In older versions of Serenity, sharing instances was the default behaviour, and you used the uniqueInstance attribute to indicate that a step library should not be shared. If you need to force this behaviour for legacy test suites, set the step.creation.strategy property to legacy in your serenity.properties file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"step.creation.strategy = legacy\n")))}c.isMDXComponent=!0},3512:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/calculator-app-15faebe39eed240aa4b761e9f492c763.png"},742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/calculator-step-screenshots-f155907793e985d481afe765cc342085.png"},1989:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/calculator-steps-5da4a36b105ab6c58ccc74f377dab106.png"},4774:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/persona-steps-e3e5d126e535bceb61d05022b43ca6a7.png"}}]);