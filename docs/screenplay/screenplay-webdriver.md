---
id: user_guide_screenplay_webtesting
sidebar_position: 2
---
# Web Testing with Serenity Screenplay
## Introduction
Web tests are a common use case for Screenplay scenarios, where we try to model user behaviour and interactions with the system. In this section, we will learn how to interact with a web application using the Screenplay WebDriver integration.

## Opening a URL

### Opening a URL directly
In Screenplay, you open a new page using the `Open` interaction class. This can work with a URL, e.g:

```java
toby.attemptsTo(Open.url("https://todomvc.com/examples/angularjs/#/"));
```

### Opening the URL of a Page Object
If you have defined a Page Object with a default url, you can open a page object by referring to the page object class. Suppose we have defined the following Serenity Page Object, and set the `@DefaultUrl` value to the TodoMVC application URL:

```java
@DefaultUrl("https://todomvc.com/examples/angularjs/#/")
public class TodoMvcPage extends PageObject {}
```

We can now open this page using the `Open.browserOn()` method, like this:

```java
toby.attemptsTo(Open.browserOn().the(TodoMvcPage.class));
```

### Using named pages

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

## Locating elements on a page

In Screenplay, you can use several different strategies to locate the elements you need to interact with. 

### CSS and XPath

The simplest way to locate an element is to use a CSS or XPath expression, as shown here:

```java
toby.attemptsTo(
    Click.on("#login-button")
);
```

Or

```java
toby.attemptsTo(
    Click.on("//input[@id='login-button']")
);
```

Serenity will interpret the string to determine whether it is an XPath or CSS expression. In some cases there may be some ambiguity, and Serenity will default to XPath. If this is not intended, you can use the "xpath:" or "css:" prefixes to specify which type of locator you mean:

```java
toby.attemptsTo(
    Click.on("css:input[name=login-button]")
);
```


### Using Selenium locators
You can also use any of the standard Selenium locator (`org.openqa.selenium.By`) classes, as shown here:

```java
toby.attemptsTo(
    Click.on(By.id("login-button"))
);
```

### Using the Target class

Using text or `By` locators has the advantage of being concise, but it can lead to poorly readable test reports, especially when complex or non-meaningful XPath or CSS locators are used. In Screenplay, the `Target` class allows us to give a locator strategy a more meaningful name. For example, consider the following code:

```java
toby.attemptsTo(Click.on("//button[.='Add']"));
```

In the Serenity reports, this step will be reported as "Toby clicks on //button[.='Add']", which is not very readable. 

If we represent this button using the `Target` class, we can associate a label such as "Add to cart button", like this:

```java
Target ADD_TO_CART = Target.the("Add to cart button").located(By.cssSelector("//button[.='Add']"));

toby.attemptsTo(Click.on(ADD_TO_CART));
```

In the reports, this step will now appear as "Toby clicks on Add to cart button".

### Using dynamic targets

You can also include variables into a `Target` locator, to make your locators dynamic. You can include numbered paramaters using "{0}", "{1}", etc, and then use the `of()` method to instantiate the `Target with the value you are interested in. For example, we could create a generic locator for a button containing a given text like this:

```java
Target BUTTON_WITH_LABEL = Target.the("{0} button").located(By.cssSelector("//button[.='{0}']"));

toby.attemptsTo(Click.on(BUTTON_WITH_LABEL.of('Add')));
```

We could even use this dynamic target to define other targets with specific values, like this:

```java
Target BUTTON_WITH_LABEL = Target.the("{0} button").located(By.cssSelector("//button[.='{0}']"));
Target ADD_BUTTON = BUTTON_WITH_LABEL.of('Add');

toby.attemptsTo(Click.on(ADD_BUTTON));
```

### Using Page Elements

Serenity [Page Elements](../../docs/guide/page_elements) provide a more intuitive and readable way to locate elements on a page, often without needing to use XPath or CSS. With Page Elements, you can identify elements using expressions such as the following
  - `Click.on(Button.withText("Add to cart"))`
  - `Enter.theValue(").into(InputField.withPlaceholder("Enter the customer name"))`
  - `Click.on(PageElement.locatedBy(".item").containingText("Bananas"))`

You can learn more about Page Elements [here](../../docs/guide/page_elements).

## Interacting with the elements on a page

In this section we will see how to interact with elements on a web page using Selenium WebDriver with Serenity Screenplay.

### Simple interactions


### Using the Target class to locate elements

### Screenplay Interaction classes
You can find the standard Serenity interaction classes in the `net.serenitybdd.screenplay.actions` package.
 
| Interaction                    | Purpose              | Example     |
| -----------                    | --------             | ----------- |
| Clear                          | Clear an input field | `actor.attemptsTo(Clear.field("#firstname"))`           |
| Click                          | Click on an element  | `actor.attemptsTo(Click.on("#add-to-cart"))`           |

The more important interactions are described in more detail in the following sections.

### Clicking on an element

The `Click` interaction class allows you to perform a WebDriver click on an element. You can identify an element in a number of ways

- Page Elements 


- Dynamic targets

### Waiting for things to happen


## Invoking the WebDriver instance directly
