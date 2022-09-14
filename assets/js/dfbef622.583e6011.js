"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[3045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5205:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(7462),s=(n(7294),n(3905));const r={id:"screenplay_rest",sidebar_position:3},i="Working with REST APIs using Serenity Screenplay",o={unversionedId:"screenplay/screenplay_rest",id:"screenplay/screenplay_rest",isDocsHomePage:!1,title:"Working with REST APIs using Serenity Screenplay",description:"The Screenplay pattern is an approach to writing automated acceptance tests that helps us write cleaner, more maintainable, more scalable automation code. A Screenplay test talks first and foremost about the tasks a user performs, in business language, rather than diving into the details about buttons, clicks and input fields. Focusing on the business tasks makes our tests more readable, more maintainable, and easier to scale.",source:"@site/docs/screenplay/screenplay-rest.md",sourceDirName:"screenplay",slug:"/screenplay/screenplay_rest",permalink:"/docs/screenplay/screenplay_rest",editUrl:"https://github.com/serenity-bdd/docs/screenplay/screenplay-rest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"screenplay_rest",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Web Testing with Serenity Screenplay",permalink:"/docs/screenplay/screenplay_webdriver"},next:{title:"Making Screenplay Assertions with Serenity Ensure",permalink:"/docs/screenplay/screenplay_ensure"}},l=[{value:"Setting up your project",id:"setting-up-your-project",children:[]},{value:"Defining a base URI",id:"defining-a-base-uri",children:[{value:"Configuring the base API URL in Maven",id:"configuring-the-base-api-url-in-maven",children:[]}]},{value:"Configuring the actor - the CallAnApi ability",id:"configuring-the-actor---the-callanapi-ability",children:[]},{value:"GET Interactions",id:"get-interactions",children:[{value:"Simple GET requests",id:"simple-get-requests",children:[]},{value:"Retrieving objects",id:"retrieving-objects",children:[]},{value:"Retrieving lists",id:"retrieving-lists",children:[]},{value:"Using Path Parameters",id:"using-path-parameters",children:[]},{value:"Using Query Parameters",id:"using-query-parameters",children:[]}]},{value:"Post queries",id:"post-queries",children:[]},{value:"Other types of queries",id:"other-types-of-queries",children:[]},{value:"Higher level tasks",id:"higher-level-tasks",children:[]}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"working-with-rest-apis-using-serenity-screenplay"},"Working with REST APIs using Serenity Screenplay"),(0,s.kt)("p",null,"The Screenplay pattern is an approach to writing automated acceptance tests that helps us write cleaner, more maintainable, more scalable automation code. A Screenplay test talks first and foremost about the tasks a user performs, in business language, rather than diving into the details about buttons, clicks and input fields. Focusing on the business tasks makes our tests more readable, more maintainable, and easier to scale."),(0,s.kt)("p",null,'Screenplay is often associated with UI testing. Interestingly, the name of the pattern is actually unrelated to screens or user interfaces; it comes from a theatre metaphor, where actors play roles on a stage following a predefined script (the "screenplay"), and was coined by Antony Marcano and Andy Palmer around 2015. The pattern itself goes back further than that, and has been around in various forms since it was first proposed by Antony Marcano in 2007.'),(0,s.kt)("p",null,"But Screenplay is also a great fit for API or web service tests. In particular, Screenplay is ideal when we want to include API and UI activities in the same test. For example, we might have an API task to set up some test data, a UI task to illustrate how a user interacts with this data, then another API task to check the new state of the database."),(0,s.kt)("p",null,"You can get a taste of what REST API interactions using Serenity Screenplay look like here:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void list_all_users() {\n\n    Actor sam = Actor.named("Sam the supervisor")\n                     .whoCan(CallAnApi.at(theRestApiBaseUrl));\n\n    sam.attemptsTo(\n            Get.resource("/users")\n    );\n\n    sam.should(\n            seeThatResponse("all the expected users should be returned",\n                    response -> response.statusCode(200)\n                                        .body("data.first_name", hasItems("George", "Janet", "Emma")))\n    );\n}\n')),(0,s.kt)("p",null,"Serenity Screenplay uses ",(0,s.kt)("a",{parentName:"p",href:"http://rest-assured.io%5BRest-Assured%5D"},"http://rest-assured.io[Rest-Assured]")," to interact with rest endpoints, and to query the responses. Rest-Assured provides us with a simple but extremely powerful Java DSL that allows us to test and virtually any kind of REST end point. Its highly readable code is also an ideal fit for Screenplay."),(0,s.kt)("h2",{id:"setting-up-your-project"},"Setting up your project"),(0,s.kt)("p",null,"To test REST API services with Screenplay, you need to add the ",(0,s.kt)("inlineCode",{parentName:"p"},"serenity-screenplay-rest")," dependency to your project. In Maven, add the following to the dependencies in your ",(0,s.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>net.serenity-bdd</groupId>\n    <artifactId>serenity-screenplay-rest</artifactId>\n    <version>${serenity.version}</version>\n    <scope>test</scope>\n</dependency>\n")),(0,s.kt)("p",null,"And for Gradle, you can add the same dependency to your ",(0,s.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-groovy"},'testCompile "net.serenity-bdd:serenity-screenplay-rest:${serenityVersion}"\n')),(0,s.kt)("h2",{id:"defining-a-base-uri"},"Defining a base URI"),(0,s.kt)("p",null,"When you test a REST API, it is convenient to be able to use the same tests against different environments. You may want to run your tests against a server running on your local machine, against a QA server, or even against a production box. And you don't want to have to change your tests whenever you test against a different environment."),(0,s.kt)("p",null,"For example, in this chapter, we will be demonstrating the features of ",(0,s.kt)("inlineCode",{parentName:"p"},"serenity-screenplay-rest")," using the ",(0,s.kt)("a",{parentName:"p",href:"https://reqres.in%5BResReq%5D"},"https://reqres.in[ResReq]")," application (see below). If you have a reliable internet connection, you can run your tests against the live ResReq server at ",(0,s.kt)("a",{parentName:"p",href:"https://reqres.in/api/"},"https://reqres.in/api/"),". Or if you are running the ResReq server locally, you would access endpoints at http://localhost:5000/api."),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The ResReq test application")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://reqres.in%5BResReq%5D"},"https://reqres.in[ResReq]")," application is an open source application written by ",(0,s.kt)("a",{parentName:"p",href:"http://benhowdle.im/%5BBen"},"http://benhowdle.im/[Ben")," Howdle] that makes it easy to experiment with REST APIs. It is hosted on Digital Ocean, where you can access it online at ",(0,s.kt)("a",{parentName:"p",href:"https://reqres.in/api/"},"https://reqres.in/api/"),". Alternatively, you can also download the application from the project's ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/benhowdle89/reqres%5Brepository"},"https://github.com/benhowdle89/reqres[repository")," on Github], and run it locally. When you run the application on your own machine, the REST API will be available at http://localhost:5000/api."),(0,s.kt)("hr",null),(0,s.kt)("p",null,"=== Reading from the Serenity config file"),(0,s.kt)("p",null,"In Serenity BDD, you can define the base URL for your REST API directly in the ",(0,s.kt)("inlineCode",{parentName:"p"},"serenity.properties")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file for your project.\nHere is an example from a ",(0,s.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'restapi {\n      baseurl = "https://reqres.in/api"\n}\n')),(0,s.kt)("p",null,"Any test can read values from the Serenity configuration files simply by creating a field of type ",(0,s.kt)("inlineCode",{parentName:"p"},"EnvironmentVariables")," in the test.\nYou can then fetch the property, and provide a default value to use if the property hasn't been defined, as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'theRestApiBaseUrl = environmentVariables.optionalProperty("restapi.baseurl")\n                                        .orElse("https://reqres.in/api");\n')),(0,s.kt)("p",null,"=== Setting the API Url from the command line"),(0,s.kt)("p",null,"You can override the default URL defined this way simply by providing a system property on the command line, like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mvn verify -Drestapi.baseurl=http://localhost:5000/api\n")),(0,s.kt)("h3",{id:"configuring-the-base-api-url-in-maven"},"Configuring the base API URL in Maven"),(0,s.kt)("p",null,"If you are using Maven, a more convenient approach may be to use ",(0,s.kt)("a",{parentName:"p",href:"http://maven.apache.org/guides/introduction/introduction-to-profiles.html%5BMaven"},"http://maven.apache.org/guides/introduction/introduction-to-profiles.html[Maven")," Profiles].\nIn your ",(0,s.kt)("inlineCode",{parentName:"p"},"pom.xml")," file, you define up different Maven profiles for each environment, and set the ",(0,s.kt)("inlineCode",{parentName:"p"},"restapi.baseurl")," property accordingly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n    <profile>\n        <id>dev</id>\n        <properties>\n            <restapi.baseurl>http://localhost:5000/api</restapi.baseurl>\n        </properties>\n    </profile>\n    <profile>\n        <id>prod</id>\n        <properties>\n            <restapi.baseurl>https://reqres.in/api</restapi.baseurl>\n        </properties>\n    </profile>\n</profiles>\n")),(0,s.kt)("p",null,"For this to work properly, you also need to ensure that the ",(0,s.kt)("inlineCode",{parentName:"p"},"restapi.baseurl")," is passed correctly to your tests.\nYou do this by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"systemPropertyVariables")," tag in the `maven-failsafe-plugin' configuration, as shown here:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <plugins>\n        <plugin>\n            <artifactId>maven-failsafe-plugin</artifactId>\n            <version>2.20</version>\n            <configuration>\n                <includes>\n                    <include>**/When*.java</include>\n                    <include>**/*Feature.java</include>\n                </includes>\n                <systemPropertyVariables>\n                    <restapi.baseurl>${restapi.baseurl}</restapi.baseurl>\n                </systemPropertyVariables>\n            </configuration>\n            <executions>\n                <execution>\n                    <goals>\n                        <goal>integration-test</goal>\n                        <goal>verify</goal>\n                    </goals>\n                </execution>\n            </executions>\n        </plugin>\n        ...\n")),(0,s.kt)("p",null,"You can then run the tests with Maven using the ",(0,s.kt)("inlineCode",{parentName:"p"},"-P")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ mvn verify -Pdev\n")),(0,s.kt)("h2",{id:"configuring-the-actor---the-callanapi-ability"},"Configuring the actor - the CallAnApi ability"),(0,s.kt)("p",null,"In Screenplay, tests describe behaviour in terms of ",(0,s.kt)("em",{parentName:"p"},"actors"),", who achieve their business goals by performing ",(0,s.kt)("em",{parentName:"p"},"tasks"),".\nThese tasks usually involve ",(0,s.kt)("em",{parentName:"p"},"interacting")," with the application in some way.\nAnd to perform these tasks, we give the actors various ",(0,s.kt)("em",{parentName:"p"},"abilities"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"CallAnApi")," ability gives actors the ability to interact with a REST web service using ",(0,s.kt)("a",{parentName:"p",href:"http://rest-assured.io%5BRest-Assured%5D"},"http://rest-assured.io[Rest-Assured]"),".\nThis includes both invoking REST end-points and querying the results."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'private String theRestApiBaseUrl;\nprivate EnvironmentVariables environmentVariables; \nprivate Actor sam; \n\n@Before\npublic void configureBaseUrl() {\n    theRestApiBaseUrl = environmentVariables.optionalProperty("restapi.baseurl") \n                                                   .orElse("https://reqres.in/api");\n\n    sam = Actor.named("Sam the supervisor").whoCan(CallAnApi.at(theRestApiBaseUrl)); \n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"CallAnApi")," ability allows the actor to perform the bundled Serenity REST interaction classes. This include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Get.resource()"),(0,s.kt)("li",{parentName:"ul"},"Post.to()"),(0,s.kt)("li",{parentName:"ul"},"Put.to()"),(0,s.kt)("li",{parentName:"ul"},"Delete.from()")),(0,s.kt)("p",null,"The simplest of these is ",(0,s.kt)("inlineCode",{parentName:"p"},"Get"),"."),(0,s.kt)("h2",{id:"get-interactions"},"GET Interactions"),(0,s.kt)("p",null,"In a REST API, GET requests are used to query a REST resource.\nLet's see how we can do this using Serenity Screenplay."),(0,s.kt)("h3",{id:"simple-get-requests"},"Simple GET requests"),(0,s.kt)("p",null,"In our demo application, the ",(0,s.kt)("inlineCode",{parentName:"p"},"/users")," resource represents application users.\nWe can retrieve the details of a particular user by appending the user ID, like this: ",(0,s.kt)("inlineCode",{parentName:"p"},"/users/1"),".\nThe structure of a user record is shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "id": 1,\n    "first_name": "George",\n    "last_name": "Bluth",\n    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"\n  }\n}\n')),(0,s.kt)("p",null,"Suppose we need to write a scenario that retrieves a particular user, and checks some of the user's details, such as first_name and last_name.\nSuch a test might look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void find_an_individual_user() {\n\n    sam.attemptsTo(\n            Get.resource("/users/1") \n    );\n\n    sam.should(\n            seeThatResponse( "User details should be correct", \n                    response -> response.statusCode(200) \n                                        .body("data.first_name", equalTo("George")) \n                                        .body("data.last_name", equalTo("Bluth")) \n            )\n    );\n}\n')),(0,s.kt)("p",null,"As you can see, this code is fairly self-explanatory.\nLike any other Screenplay test, we use the actor's ",(0,s.kt)("inlineCode",{parentName:"p"},"attemptsTo()")," method to perform the action we want to test.\nIn this case, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Get")," interaction class, which comes bundled with ",(0,s.kt)("inlineCode",{parentName:"p"},"serenity-screenplay-rest"),"."),(0,s.kt)("p",null,"Next we check the response using the ",(0,s.kt)("inlineCode",{parentName:"p"},"seeThatResponse")," method.\nThis method takes a Lambda expression and allows us to access the full RestAssured API.\nIn particular, we can use ",(0,s.kt)("a",{parentName:"p",href:"http://static.javadoc.io/io.restassured/json-path/3.1.0/io/restassured/path/json/JsonPath.html%5BjsonPath%5D"},"http://static.javadoc.io/io.restassured/json-path/3.1.0/io/restassured/path/json/JsonPath.html[jsonPath]")," expressions to query the JSON structure we receive."),(0,s.kt)("h3",{id:"retrieving-objects"},"Retrieving objects"),(0,s.kt)("p",null,"Sometimes we need to fetch a value from a REST response, and keep it for use later on. RestAssured makes it relatively easy to convert a JSON structure to a Java object, which you can use later on in your tests."),(0,s.kt)("p",null,"For example, suppose we have a class like the one below, which corresponds to the user details returned by our endpoint:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"package examples.screenplay.rest.model;\n\npublic class User {\n    private String id;\n    private String first_name;\n    private String last_name;\n\n\n    public User(String first_name, String last_name) {\n        this.first_name = first_name;\n        this.last_name = last_name;\n    }\n\n    public String getId() {\n        return id;\n    }\n\n    public String getFirstName() {\n        return first_name;\n    }\n\n    public String getLastName() {\n        return last_name;\n    }\n}\n")),(0,s.kt)("p",null,"We could retrieve the user as an instance of this class by calling the ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonPath().getObject()")," method on the received response. This method will convert the JSON data on a given path to a corresponding Java structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void retrieve_an_element_from_the_json_structure() {\n\n    sam.attemptsTo(\n            Get.resource("/users/1")\n    );\n\n    User user = SerenityRest.lastResponse() \n                            .jsonPath()\n                            .getObject("data", User.class); \n\n    assertThat(user.getFirstName()).isEqualTo("George");\n    assertThat(user.getLastName()).isEqualTo("Bluth");\n\n}\n')),(0,s.kt)("h3",{id:"retrieving-lists"},"Retrieving lists"),(0,s.kt)("p",null,"Oftentimes we need to retrieve not a single item, but a list of items.\nRetrieving a list is little different to retrieving a single item:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'sam.attemptsTo(\n        Get.resource("/users") \n);\n\nsam.should(\n        seeThatResponse("all the expected users should be returned",\n                response -> response.body("data.first_name", hasItems("George", "Janet", "Emma"))) \n);\n')),(0,s.kt)("p",null,"The difference happens when we query the results.\nIn this case, we use a jsonPath expression (",(0,s.kt)("inlineCode",{parentName:"p"},"data.first_name"),") that will return ",(0,s.kt)("em",{parentName:"p"},"all")," of the first_name field values.\nThe Hamcrest matcher ",(0,s.kt)("inlineCode",{parentName:"p"},"hasItems"),' will compare the collection of first names that the jsonPath query returns, and check that it contains (at least) the names "George", "Janet" and "Emma".'),(0,s.kt)("p",null,"But what if we want to capture the data we retrieve, rather than simply make an assertion about the contents?\nWe can do that using the ",(0,s.kt)("inlineCode",{parentName:"p"},"SerenityRest.lastResponse()")," method, like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'List<String> userSurnames = SerenityRest.lastResponse().path("data.last_name"); \nassertThat(userSurnames).contains("Bluth", "Weaver", "Wong");\n')),(0,s.kt)("p",null,"We can also retrieve lists of objects, just as we retrieved a single ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," instance in the previous section.\nSimply use the ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonPath.getList()")," method as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'sam.attemptsTo(\n        Get.resource("/users") \n);\n\nsam.should(\n        seeThatResponse("all the expected users should be returned",\n                response -> response.body("data.first_name", hasItems("George", "Janet", "Emma"))) \n);\n')),(0,s.kt)("h3",{id:"using-path-parameters"},"Using Path Parameters"),(0,s.kt)("p",null,"In the previous example, we hard-coded the path element in the request.\nFor a more flexible approach, we can supply the path parameter when we submit the query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'sam.attemptsTo(\n        Get.resource("/users/{id}").with( request -> request.pathParam("id", 1)) \n);\n')),(0,s.kt)("p",null,"Here we are using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Get.resource(...).with(...)")," structure to pass the RestAssured ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestSpecification")," object into a lambda expression.\nOnce again, this gives us access to all the richness of the RestAssert library"),(0,s.kt)("h3",{id:"using-query-parameters"},"Using Query Parameters"),(0,s.kt)("p",null,"Some REST APIs take query parameters as well as path parameters. Query parameters are commonly used to filter results or implement pagination. For example, we could get the second page of users from our ",(0,s.kt)("inlineCode",{parentName:"p"},"/users")," API by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," query parameter like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/users?page=2\n")),(0,s.kt)("p",null,"In our test code, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"queryParam()")," method to provide a value for the ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," parameter:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'sam.attemptsTo(\n        Get.resource("/users").with( request -> request.queryParam("page", 2)) \n);\n\nsam.should(\n        seeThatResponse("All users on page 2 should be returned",\n                response -> response.body("data.first_name",\n                                     hasItems("Eve", "Charles", "Tracey"))) \n);\n')),(0,s.kt)("h2",{id:"post-queries"},"Post queries"),(0,s.kt)("p",null,"We can send POST requests to a REST end-point using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Post")," interaction class. Here is a simple example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'sam.attemptsTo(\n        Post.to("/users")\n                .with(request -> request.header("Content-Type", "application/json") \n                                        .body("{\\"firstName\\": \\"Sarah-Jane\\",\\"lastName\\": \\"Smith\\"}") \n                )\n);\n\nsam.should(\n        seeThatResponse("The user should have been successfully added",\n                        response -> response.statusCode(201))\n);\n')),(0,s.kt)("p",null,"Alternatively, we can post an object, letting RestAssured convert the object fields into JSON for us:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'User newUser = new User("Sarah-Jane", "Smith");\n\nsam.attemptsTo(\n        Post.to("/users")\n                .with(request -> request.header("Content-Type", "application/json")\n                                        .body(newUser) \n                )\n);\n')),(0,s.kt)("h2",{id:"other-types-of-queries"},"Other types of queries"),(0,s.kt)("p",null,"Other query types are similar to ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," queries.\nFor example, ",(0,s.kt)("inlineCode",{parentName:"p"},"PUT")," requests are often used to update resources.\nIn the following example, we use a ",(0,s.kt)("inlineCode",{parentName:"p"},"PUT")," request to update a user's details:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'sam.attemptsTo(\n        Put.to("/users")\n                .with(request -> request.header("Content-Type", "application/json")\n                        .body("{\\"firstName\\": \\"jack\\",\\"lastName\\": \\"smith\\"}")\n                )\n);\n\nsam.should(\n        seeThatResponse(response -> response.statusCode(200)\n                                            .body("updatedAt", not(isEmptyString())))\n);\n')),(0,s.kt)("p",null,"Or you can delete a user using the ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," query as shown here:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'sam.attemptsTo(\n        Delete.from("/users/1")\n);\n\nsam.should(\n        seeThatResponse(response -> response.statusCode(204))\n);\n')),(0,s.kt)("h2",{id:"higher-level-tasks"},"Higher level tasks"),(0,s.kt)("p",null,"The interactions we have seen so far are readable but still quite low level.\nScreenplay allows us to build higher level tasks that represent the business intent behind these interactions."),(0,s.kt)("p",null,"For example, you could define a task that encapsulates listing all users like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package examples.screenplay.rest.tasks;\n\nimport net.serenitybdd.screenplay.Task;\nimport net.serenitybdd.screenplay.rest.interactions.Get;\n\npublic class UserTasks {\n    public static Task listAllUsers() {\n        return Task.where("{0} lists all users",  \n                Get.resource("/users") \n        );\n    }\n}\n')),(0,s.kt)("p",null,"We can then use a static import to refactor our first test as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"sam.attemptsTo(\n        listAllUsers()\n);\n")),(0,s.kt)("p",null,"For a bit more flexibility, we can also write a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," class. For example, we could write a ",(0,s.kt)("inlineCode",{parentName:"p"},"FindAUser")," task to find a user by ID:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package examples.screenplay.rest.tasks;\n\nimport net.serenitybdd.screenplay.Actor;\nimport net.serenitybdd.screenplay.Task;\nimport net.serenitybdd.screenplay.rest.interactions.Get;\nimport net.thucydides.core.annotations.Step;\n\nimport static net.serenitybdd.screenplay.Tasks.instrumented;\n\npublic class FindAUser implements Task{\n    private final int id;\n\n    public FindAUser(int id) {\n        this.id = id;\n    }\n\n    public static FindAUser withId(int id) {\n        return instrumented(FindAUser.class, id);\n    }\n\n    @Override\n    @Step("{0} fetches the user with id #id")\n    public <T extends Actor> void performAs(T actor) {\n        actor.attemptsTo(\n                Get.resource("/users/{id}")\n                   .with(request -> request.pathParam("id", id))\n        );\n    }\n}\n')),(0,s.kt)("p",null,"Using this class, we could refactor our original class to read like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"sam.attemptsTo(\n        FindAUser.withId(1)\n);\n")),(0,s.kt)("p",null,"Using tasks to encapsulate REST interactions results in a clear, layered reporting structure, that first describes what the user is doing, and they how they go about it. The test report for the previous scenario is shown here:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(8118).Z})))}u.isMDXComponent=!0},8118:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/find-a-user-by-id-027d199be318af7f5c3207b9d63806ba.png"}}]);