---
id: page_elements
title: Serenity Page Elements
sidebar_position: 5
---

# Serenity Page Elements

## Introduction
In most Selenium-based test automation frameworks, CSS or XPath selectors are commonly used to locate elements on a page.
Serenity BDD provides a simpler way of interacting with common UI components, which can avoid needing to use XPath or CSS expressions.

For example, the following HTML code illustrates a few different ways to represent a button:
```html
<button type="button" class="btn btn-primary">Login</button>
<input type="submit" value="Login">
```

In Serenity, we could interact with these using XPath or CSS, e.g.
```java
$("css:input[value='Login']").click()
```
or
```java
$("xpath://button[.='Login']").click()
```

However, if the UI implementation switched from one to another, the test would break.

Serenity Page Elements provide a more intuitive way to identify many common UI elements. Using Serenity Page Elements, we can use a more expression like this:

```java
import net.serenitybdd.screenplay.ui.Button;
.
.
.
$(Button.called("Login").click();
```

Or for a Screenplay test, you could do the following:

```java
actor.attemptsTo(
    Click.on(Button.called("Login"))
);
```

Under the hood, Serenity will look for `<button>` elements called "Logon" or `<input>` elements of type `submit`, with a _value_, _id_, or _data-test_ attribute of "login", or even a CSS class of "login".

This means that, in many cases, you can use the `Button` class directly in your code, without having to inspect the page structure first.

Serenity Page Elements are found in the `serenity-screenplay-webdriver` module, but they can be used in both Screenplay and Action Class-based tests.

There are many different types of page elements available. All of them have the `named()` method, but some have other methods for more specific locator strategies, such as `withLabel()` for checkboxes.

Let's look at each type of page element in more detail.

## Buttons

The `Button` page element locates a `<button>` element with a specific tect, or an `<input>` element of type `submit` with a specific value.

Suppose we have the following HTML code:
```
<button type="button">A Button</button>
<input type="submit" value="Submit Me!" name="submit-button" data-test="submit-the-button">
<input type="button" value="Press Here">
```


We could use the following expressions to identify these elements:

| Strategy    | Example     |
| ----------- | ----------- |
| By text     | Button.called("A Button")             |
| By value    | Button.called("Press Here")           |
| By name     | Button.called("submit-button")                           |
| By data-test attribute     | Button.called("submit-the-button")        |

:::tip
The `called()` method will match the `id`, `name`, or `data-test` attribute for any kind of Page Element, so we won't repeat them everywhere in the following sections.
:::

## Checkbox
This element will match an `<input>` element of type "checkbox", with a specified _value_,
_data-test_, or _class_ attribute value.

Suppose we have the following HTML:
```html
<input type="checkbox" id="vehicle1" value="Bike" class="bikeride">
<label for="vehicle1"> I have a bike</label><br>
<input type="checkbox" id="vehicle2" value="Car" class="field-style">
<label for="vehicle2"> I have a car</label><br>
<input type="checkbox" id="vehicle3" value="Boat" checked>
<label for="vehicle3"> I have a boat</label><br>
```

We could use the following expressions to identify these elements:

| Strategy    | Example     |
| ----------- | ----------- |
| By id       | Checkbox.called("vehicle1")           |
| By value    | Checkbox.withValue("Bike")            |
| By label    | Checkbox.withLabel("I have a bike")   |

## Dropdown

The `Dropdown` page element lets us work with a `<select>` dropdown list. Suppose we had the following HTML:
```html
<label for="cars">Choose a car:</label>
<select name="cars" id="cars">
    <option value="">---Pick Your Car---</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
</select>
```

We could use the following expressions to identify these elements:

| Strategy              | Example     |
| -----------           | ----------- |
| By name or id         | Dropdown.called("cars")           |
| By label         | Dropdown.withLabel("Choose a car:")          |
| By default option         | Dropdown.withLabel("---Pick Your Car---")          |

## Image

The `Image` page element lets us interact with `<img>` elements. For example, suppose we had the following HTML code:

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```

We could use the following expressions to identify these elements:

| Strategy        | Example     |
| -----------     | ----------- |
| By alt text     | Image.withAltText("Girl in a jacket")           |
| By src          | Image.withSrc("img_girl.jpg")             |
| By src (starting with) | Image.withSrcStartingWith("img_")             |
| By src (ending with) | Image.withSrcEndingWith("girl.jpg")             |


## InputField

The `InputField` page element represents an `<input>` element in a form, with or without a `<label>`. For example, suppose we had the following HTML code:

```html
<label for="customer_name">Customer Name</label>
<input type="text" id="customer_name" name="customername" placeholder="Enter the customer name" />
```

We could use the following expressions to identify these elements:

| Strategy        | Example     |
| -----------     | ----------- |
| By name         | InputField.called("customername")           |
| By id           | InputField.called("customer_name")           |
| By placeholder  | InputField.withPlaceholder("Enter the customer name")              |
| By label        | InputField.withLabel("Customer Name")   |

## Link

The `Link` page element interacts with HTML `<a>` elements. For example, suppose we have the following HTML code:

```html
<!-- A simple link --->
<a href="...">Link 1</a><br/>
<!-- A link with a title -->
<a href="..." title="Link Number 2">Link 2</a><br/>
<!-- A link with an icon and a text-->
<a href="#" onclick="update('Link 3')"><i class="glyphicon glyphicon-cloud"></i>Link 3</a><br/>
```

We could use the following expressions to identify these elements:

| Strategy              | Example     |
| -----------           | ----------- |
| By link text          | Link.called("Link 1")           |
| By link title         | Link.withTitle("Link Number 2")          |
| By partial link text  | Link.containing("ink")              |
| By starting text      | Link.startingWith("Link")    |
| By icon               | Link.withIcon("glyphicon-cloud")    |


## PageElement

The `PageElement` page element represents any element on a page. For example, suppose we have the following HTML code:

```html
<div id="container" data-test="the-container" class="a-container">
    <div class="item">
        <h2>Item 1 heading</h2>
        <div>
            <span class="description">Item 1 description</span>
        </div>
    </div>
    <div class="item">
        <h2>Item 2 heading</h2>
        <div>
            <span class="description">Item 2 description</span>
        </div>
    </div>
</div>
```

We could use the following expressions to identify elements in this code:

| Strategy                    | Example     |
| -----------                 | ----------- |
| By id                       | PageElement.called("container")           |
| By data-test value          | PageElement.called("the-container")           |
| Containing a text value           | PageElement.called("item").containingText("Item 1")         |
| Containing a text value (with a CSS locator)          | PageElement.locatedBy(".item").containingText("Item 1")         |

## RadioButton

The `RadioButton` page element represents a set of radio buttons. For example, suppose we have the following HTML code:


```html
<input type="radio" id="html" name="fav_language" value="HTML" class="html-radio">
<label for="html">Choose HTML</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">Choose CSS</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Choose JavaScript</label><br><br>
```

We could use the following expressions to identify these elements:

| Strategy              | Example     |
| -----------           | ----------- |
| By id          | RadioButton.called("html")           |
| By label         | RadioButton.withLabel("Choose CSS")         |
| By value  |RadioButton.withValue("JavaScript")            |
