---
id: user_guide_screenplay_webtesting
sidebar_position: 2
---
# Web Testing with Serenity Screenplay
## Interacting with a web page
Web tests are a common use case for Screenplay scenarios, where we try to model user behaviour and interactions with the system. In this section, we will learn how to interact with a web application using the Screenplay WebDriver integration.

### Opening a URL

#### Opening a URL directly
In Screenplay, you open a new page using the `Open` interaction class. This can work with a URL, e.g:

```java
toby.attemptsTo(Open.url("https://todomvc.com/examples/angularjs/#/"));
```

#### Opening the URL of a Page Object
If you have defined a Page Object with a default url, you can open a page object by referring to the page object class. Suppose we have defined the following Serenity Page Object, and set the `@DefaultUrl` value to the TodoMVC application URL:

```java
@DefaultUrl("https://todomvc.com/examples/angularjs/#/")
public class TodoMvcPage extends PageObject {}
```

We can now open this page using the `Open.browserOn()` method, like this:

```java
toby.attemptsTo(Open.browserOn().the(TodoMvcPage.class));
```

#### Using named pages

Sometimes it can be convenient to store the URLs for different environments or servers in the `serenity.conf` file, and refer to them by the name of the property in our test code. 

For example, imagine we wanted to run our tests against the Angular, React and Polymer implementations of the TodoMVC app. Each application has a different URL, that we could store in the `serenity.conf` file like this:

```json
pages {
    angular = "https://todomvc.com/examples/angularjs/#/"
    react = "https://todomvc.com/examples/react/#/"
    polymer = "https://todomvc.com/examples/polymer/index.html"
}
```

Next, we can refer to these properties in our code using the `thePageNamed()` method, like this:

```java
toby.attemptsTo(Open.browserOn().thePageNamed("pages.react"));
```




## Grouping Interactions into Tasks

### Using the Tasks class

### Creating your own Performables
