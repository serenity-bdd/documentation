---
id: screenplay_ensure
sidebar_position: 4
---
# Making Screenplay Assertions with Serenity Ensure
## Introduction
Web tests are a common use case for Screenplay scenarios, where we try to model user behaviour and interactions with the system. In this section, we will learn how to interact with a web application using the Screenplay WebDriver integration.

We have seen how make assertions using the `should()` method with
targets or questions combined with Hamcrest matchers, like this:

```java
sam.attemptsTo(
  Enter.theValue("40").into(AGE_FIELD).thenHit(Keys.ENTER)
);

sam.should(
    seeThat(the(AGE_FIELD), hasValue("40"))
);
```

In the code shown here, the `the()` method is a static import from the
`WebElementQuestion` class, and the `hasValue()` is a static import from
the `WebElementStateMatchers` class. This is quite flexible, as you can
add custom matchers quite easily. However, it means you need to know
what matchers exist, and which ones can be used in different
circumstances.

## Introducing Serenity Ensure 
Serenity Screenplay also provides an alternative approach, which many developers find easier to use and faster to write. This approach uses the `Ensure` class. The `Ensure` class produces a `Performable`, so you can integrate them directly into the `attemptsTo()` method. It also has a very readable DSL and lets you use code completion to discover the assertions you can use for different values, making writing assertions easier and quicker. An example of code equivalent to the above can be seen here:

```java
sam.attemptsTo(
    Enter.theValue("40").into(AGE_FIELD).thenHit(Keys.ENTER),
    Ensure.that(AGE).text().isEqualTo("40")
);
```

In this section, you will learn how to use _Serenity Ensure_ to write fluent assertions for your own projects.

## Adding Serenity Ensure to your project

Serenity Ensure needs an extra dependency in your build script. For
Maven, add the `serenity-enusre` dependency to your `pom.xml` file:

```xml
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-ensure</artifactId>
    <version>${serenity.version}</version>
    <scope>test</scope>
</dependency>
```

And in Gradle, you need to add the following dependency:

```groovy
testCompile "net.serenity-bdd:serenity-screenplay-webdriver:${serenity.version}"
```

## Your first Ensure test

A very simple `Ensure` test can be seen here:

```java
Actor aster = Actor.named("Aster");

int age = 20;

aster.attemptsTo(
    Ensure.that(age).isEqualTo(20)              
);
```

Almost all `Ensure` assertions start with the `Ensure.that()` method. This method takes the value being tested as a parameter (in this
case an integer). Following this comes the actual assertion method.

## Assertions about numbers

You can use auto-complete in your IDE to see the range of assertions
available. For integers, longs and floating point numbers, the
assertions include:

| Assertion          | Example     |
| -----------        | ----------- |
| isEqualTo          | `Ensure.that(age).isEqualTo(18)`                |
| isNotEqualTo       | `Ensure.that(age).isNotEqualTo(65)`             |
| isGreaterThan      | `Ensure.that(age).isGreaterThan(18)`            |
| isGreaterThanOrEqualTo | `Ensure.that(age).isGreaterThanOrEqualTo(20)` |
| isLessThan         | `Ensure.that(age).isLessThan(100)`              |
| isBetween          | `Ensure.that(age).isBetween(18,25)`             |
| isStrictlyBetween  | `Ensure.that(age).isStrictlyBetween(20,25)`     |

For doubles and floats, you can also use the `isCloseTo()` assertion:

```java
float creditScore = 9.8F;

aster.attemptsTo(
    Ensure.that(creditScore).isCloseTo(9.81F, 0.01F)
);
```

## Assertions about Strings

Another common requirement is to make assertions about Strings. An
example is shown here:

```java
String name = "Bill";
aster.attemptsTo(
    Ensure.that(name).isEqualToIgnoringCase("BILL")
);
```

Other basic comparison assertions about Strings include the following:

| Assertion          | Example     |
| -----------        | ----------- |
| isEqualTo          | `Ensure.that(name).isEqualTo("Bill")`           |
| isNotEqualTo       | `Ensure.that(name).isNotEqualTo("Joe")`         |
| isGreaterThan      | `Ensure.that(name).isGreaterThan("Alfred")`     |
| isGreaterThanOrEqualTo | `Ensure.that(name).isGreaterThanOrEqualTo("Al")` |
| isLessThan         | `Ensure.that(name).isLessThan("Carrie")`        |
| isBetween          | `Ensure.that(name).isBetween("Bill","Carrie")`  |
| isStrictlyBetween  | `Ensure.that(name).isStrictlyBetween("Al",25)`  |

### String contents

The `Ensure` class also has a number of assertions related to string
contents. For example:

```java
String colors = "Red Green Blue";
aster.attemptsTo(
    Ensure.that(colors).contains("Green")
);
```

| Assertion          | Example     |
| -----------        | ----------- |
| containsIgnoringCase | `Ensure.that(colors).containsIgnoringCase("RED")` |
| containsOnlyDigits | `Ensure.that("123").containsOnlyDigits()`       |
| containsOnlyLettersOrDigits | `Ensure.that("abc123").containsOnlyLettersOrDigits()` |
| containsOnlyLetters | `Ensure.that("abc").containsOnlyLetters()`      |
| containsWhitespaces | `Ensure.that("Red Green").containsWhitespaces() |
| containsOnlyWhitespaces | `Ensure.that("   ").containsOnlyWhitespaces()`  |
| startsWith         | `Ensure.that(colors).startsWith("Red")`         |
| endsWith           | `Ensure.that(colors).endsWith("Blue")`          |
| matches            | `Ensure.that(colors).matches("Red (.*) Blue")`  |
| doesNotContain     | `Ensure.that(colors).doesNotContain("cyan")`    |
| isBlank()          | `Ensure.that("  ").isBlank()`                   |
| isNotBlank()       | `Ensure.that(colors).isNotBlank()`              |
| isEmpty()          | `Ensure.that("").isEmpty()`                     |
| isNotEmpty()       | `Ensure.that(colors).isNotEmpty()`              |
| isInLowerCase()    | `Ensure.that("red").isInLowerCase()`            |
| isInUpperCase()    | `Ensure.that("RED").isInUpperCase()`            |
| isSubstringOf      | `Ensure.that("Green").isSubstringOf(colors)`    |

### String Size 
There are also some assertions to check the length of the
string For example:

```java
String colors = "Red Green Blue";
aster.attemptsTo(
    Ensure.that(colors).hasSizeGreaterThan(3)
);
```

| Assertion          | Example     |
| -----------        | ----------- |
| hasSize            | `Ensure.that("red").hasSize(3)`                 |
| hasSizeGreaterThan | `Ensure.that("red").hasSizeGreaterThan(2)`      |
| hasSizeGreaterThanOrEqualTo | `Ensure.that("red").hasSizeGreaterThanOrEqualTo(3)` |
| hasSizeLessThan    | `Ensure.that("red").hasSizeLessThan(4)`         |
| hasSizeLessThanOrEqualTo | `Ensure.that("red").hasSizeLessThanOrEqualTo(3)` |
| hasSizeBetween     | `Ensure.that("red").hasSizeBetween(1,5)`        |
| hasLineCount       | `Ensure.that(colors).hasLineCount(1)`           |

## Assertions using Lambda expressions

Another useful trick is to use a Java 8 Lambda expression to do the
check. You can use the `Ensure.that(...).matches(...)` construct to pass
in a lambda predicate which will determine whether the `Ensure`
statement should pass or fail.

For example:

```java
String actualColor = "green";

aster.attemptsTo(
    Ensure.that(actualColor).matches("is an RGB color",        
                              color -> color.equals("red")     
                                       || color.equals("blue")
                                       || color.equals("green"))
);
```

## Negative assertions

You can negate an `Ensure.that()` statement simply by including the
`not()` method. For example:

```java
String colors = "Red Green Blue";
aster.attemptsTo(
    Ensure.that(colors).not().contains("Cyan")
);
```

## Working with dates and times

The `Ensure` class provides a few special methods for dates and times.
For `LocalTime` variables, we can use `Ensure.that(...).isBefore()` and
`Ensure.that(...).isAfter()` to compare two times, as we can see here:

```java
LocalTime tenInTheMorning = LocalTime.of(10,0);
LocalTime twoInTheAfternoon = LocalTime.of(14,0);

aster.attemptsTo(
    Ensure.that(tenInTheMorning).isBefore(twoInTheAfternoon)
);
```

For `LocalDate` variables, we have `isBefore()` and `isAfter()`, as well
as a number of others, such as the `isDayOfWeek()` method illustrated
here:

```java
LocalDate firstOfJanuary = LocalDate.of(2000,1,1);

aster.attemptsTo(
    Ensure.that(firstOfJanuary).isDayOfWeek(DayOfWeek.SATURDAY)
);
```

Other date-related assertions include:

| Assertion          | Example     |
| -----------        | ----------- |
| isDayOfWeek        | `Ensure.that(firstOfJanuary).isDayOfWeek(SATURDAY)` |
| isDayOfMonth       | `Ensure.that(firstOfJanuary).isDayOfMonth(1)`   |
| isInTheMonthOf     | `Ensure.that(firstOfJanuary).isInTheMonthOf(JANUARY)` |
| isTheYear          | `Ensure.that(firstOfJanuary).isTheYear(2000)`   |

## Working with collections

The `Ensure` class gives you a range of methods to make assertions about
collections. This can be as simple as checking whether an element
appears in a collection: we can do this using the
`Ensure.that(...).isIn(...)` construct:

```java
List<String> colors = Arrays.asList("red", "green", "blue");

aster.attemptsTo(
    Ensure.that("red").isIn(colors)
);
```

Suppose we had the following lists:

```java
List<String> sameColors = Arrays.asList("red", "green", "blue");
List<String> differentColors = Arrays.asList("red", "green", "cyan");
List<String> allColors = Arrays.asList("red", "green", "blue","yellow","cyan");
List<String> lastColors = Arrays.asList("yellow","cyan");
List<String> redAndPink = Arrays.asList("red", "pink");
List<String> noColors = Arrays.asList();
```

Here are some examples of other assertion methods using these
collections:

## Assertions about list equality and size

The following assertions are useful if you need to check the size of a
collection, or whether it is equivalent to another collection.

| Assertion          | Example     |
| -----------        | ----------- |
| isEqualTo          | `Ensure.that(colors).isEqualTo(sameColors)`     |
| isEmpty            | `Ensure.that(noColors).isEmpty()`               |
| isNotEmpty         | `Ensure.that(colors).isNotEmpty()`              |
| hasSize            | `Ensure.that(colors).hasSize(3)`                |
| hasSizeGreaterThan | `Ensure.that(colors).hasSizeGreaterThan(2)`     |
| hasSizeLessThan    | `Ensure.that(colors).hasSizeLessThan(4)`        |
| hasSizeBetween     | `Ensure.that(colors).hasSizeBetween(2,4)`       |
| hasSameSizeAs      | `Ensure.that(colors).hasSameSize(differentColors)`  |

# Assertions about list contents

Often we need to check the contents of a collection. We can do this
using a range of *contains* assertions, as illustrated here:

```java
List<String> colors = Arrays.asList("red", "green", "blue");

aster.attemptsTo(
    Ensure.that(contains).contains("red")
);
```

Some of the other *contains* assertions are listed in the table below:

| Assertion          | Example     |
| -----------        | ----------- |
| contains           | `Ensure.that(colors).contains("red","blue")`    |
| containsAnyOf      | `Ensure.that(colors).anyOf("red","pink")`       |
| containsOnly       | `Ensure.that(colors).containsOnly("blue","green","red")`   |
| containsExactly    | `Ensure.that(colors).containsExactly("red","blue","green")`  |
| containsExactlyInAnyOrder | `Ensure.that(colors).containsExactly("red","blue","green")`|
| doesNotContain     | `Ensure.that(colors).doesNotContain("pink")`    |
| containsElementsFrom | `Ensure.that(allColors).containsElementsFrom(colors)`  |
| containsAnyElementsOf   | `Ensure.that(colors).containsAnyElementsOf(redAndPink)` |
| containsExactlyElementsOf | `Ensure.that(colors).containsExactlyElementsOf(sameColors)`  |
| isASubsetOf        | `Ensure.that(colors).isASubsetOf(allColors)`    |
| doesNotHaveDuplicates | `Ensure.that(colors).doesNotHaveDuplicates()`   |
| startsWith         | `Ensure.that(colors).startsWith("red", "green")` |
| startsWithElementsFrom | `Ensure.that(allColors).startsWithElementsFrom(colors)`  |
| endsWith           | `Ensure.that(colors).endsWith("green","blue")`  |
| endWithElementsFrom | `Ensure.that(allColors).endWithElementsFrom(lastColors)`  |

## Matching list elements with Java 8 Lambdas

Lambda expressions provide a powerful way of making arbitrary assertions
about the contents of a collection. We can use the
`Ensure.that(...).allMatch()`, `Ensure.that(...).anyMatch()` and
`Ensure.that(...).noneMatch()` to do this. For example, the following
code asserts that each element in a collection is 4 characters long:

```java
List<String> colors = ImmutableList.of("blue", "cyan", "pink");

aster.attemptsTo(
    Ensure.that(colors).allMatch("4 characters long",
                                 it -> it.length() == 4)
);
```

Note that when we use a Lambda expression, we need to include a
description of the expectation before providing the lambda expression
itself. This description will be used in the reports should the
assertion fail.

The *anyMatch* method checks that there exists at least one element in a
collection that matches a specified predicate. An example is shown here:

```java
@Test
public void shouldContainAtLeastOnePrimaryColor() {
    Actor aster = Actor.named("Aster");
    List<String> colors = ImmutableList.of("blue", "cyan", "pink");

    aster.attemptsTo(
        Ensure.that(colors).anyMatch("is a primary color",
                                     it ->  isAPrimaryColor(it))
    );
}

private boolean isAPrimaryColor(String color) {
    return  (color == "red")
            || (color == "green")
            || (color == "blue");
}
```

The *noneMatch* method checks that no elements exist in a collection
that match a certain condition.

```java
List<String> colors = ImmutableList.of("orange", "cyan", "pink");

aster.attemptsTo(
    Ensure.that(colors).noneMatch("is a primary color",
                                  it ->  isAPrimaryColor(it))
);
```

You can also check for specific numbers of elements, using `atLeast`,
`noMoreThan`, and `exactly`. For example:

```java
List<String> colors = ImmutableList.of("blue", "cyan", "red","pink");

aster.attemptsTo(
    Ensure.that(colors).atLeast(2, "is a primary color",
                                it ->  isAPrimaryColor(it))
);
```

## Using Named Expectations

If you have commonly used predicates in your test code, you can use the
`NamedExpectation` to make your code more concise. For example, here we
define a `NamedExpectation` that matches primary colors:

```java
private static final  NamedExpectation<String> IS_A_PRIMARY_COLOR
        = new NamedExpectation<>("is a primary color",
                               color -> (color.equals("red"))
                                        || (color.equals("green"))
                                        || (color.equals("blue")));
```

We could use this in the `Ensure.that()` method like this:

```java
aster.attemptsTo(
    Ensure.that(colors).anyMatch(IS_A_PRIMARY_COLOR)
);
```

## Working with web elements

When writing UI tests, we need to make assertions about the state of
elements on a web page. The `Ensure` class makes this an easy task.

We can make assertions about `Target` elements directly using the
`Ensure.that()` method.

```java
Target FIRST_NAME = Target.the("First name field").locatedBy("#firstName")

aster.attemptsTo(
    Ensure.that(FIRST_NAME).value().isEqualTo("Joe"),
);
```

A more flexible approach is to use the `ElementLocated` class to
identify an element. We can also locate elements using `By` locators or
CSS/XPath strings. The following code uses the `Ensure.that()` and
`ElementLocated.by()` methods to check whether the element located by
the CSS selector \"#firstName\" is displayed:

```java
aster.attemptsTo(
    Ensure.that(ElementLocated.by("#firstName")).isDisplayed(),
);
```

The `ElementLocated.by()` will work with `By` locators, XPath/CSS
strings or `Target` elements, which means that you can easily decouple
your locator strategy from your assertions.

### Simple web element assertions

The most simple assertions about web elements are boolean checks about
the state of the element. The `Ensure.that(...).is...` assertions let
you make assertions about whether an element is displayed or disabled.

| Assertion          | Example     |
| -----------        | ----------- |
| isDisplayed        | `Ensure.that(FIRST_NAME).isDisplayed()`         |
| isDisabled         | `Ensure.that(FIRST_NAME).isDisabled()`          |
| isEnabled          | `Ensure.that(FIRST_NAME).isEnabled()`           |
+--------------------+-------------------------------------------------+

# Checking text content and field values

Checking field values and text content is the bread-and-butter of many
web tests. You can use `Ensure.that(...).value()` to read the value
attribute of a field, as shown here:

```java
aster.attemptsTo(
    Ensure.that(FIRST_NAME).value().startsWith("Joe"),
);
```

The `Ensure.that(...).text()` method lets you read the text of the
element:

```java
aster.attemptsTo(
    Ensure.that(SEARCH_RESULTS_SUMMARY)
          .text()
          .endsWith("results for 'Serenity'"),
);
```

You can also read the text contents of an element using
`Ensure.that(...).textContent()`. The text content is the value of the
`textContent` CSS attribute.

This value is available even when an element is not visible, making it
useful in cases where you need to read a full set of values, even those
not currently visible on the page.

The most important `Ensure.that(...)` methods for web elements include
the following:

| Assertion          | Example     |
| -----------        | ----------- |
| value              | `Ensure.that(FIRST_NAME).value().isEqualTo("Joe |
|                    | ")`                                             |
| text               | `Ensure.that(DESCRIPTION).text().isNotEmpty()`  |
| textContent        | `Ensure.that(DESCRIPTION).textContent().isNotEmpty()`  |
| attribute          | `Ensure.that(FIRST_NAME).attribute("title").isEqualTo("First name")`|
| selectedValue      | `Ensure.that(COLORS).selectedValue().isEqualTo("green")`   |
| selectedVisibleText | `Ensure.that(COLORS).selectedVisibleText().isEqualTo("Green")`   |
| hasCssClass        | `Ensure.that(COLORS).hasCssClass("color-list")` |
| containsElements   | `Ensure.that(RESULT_LIST).containsElements(".result-details")`|
+--------------------+-------------------------------------------------+

All of these methods allow you to make all of the String assertions we
saw earlier.

# Converting values to different types

Sometimes it is useful to be able to make assertions about non-String
types. For example:

```java
aster.attemptsTo(
    Ensure.that(ElementLocated.by("#itemCount"))
          .value()
          .asAnInteger()
          .isGreaterThanOrEqualTo(2)
);
```

The main conversion methods include:

| Assertion          | Example     |
| -----------        | ----------- |
| asAnInteger        | `Ensure.that(ITEM_COUNT).value().asAnInteger().isEqualTo(2)`   |
| asADouble          | `Ensure.that(TOTAL_COST).value().asADouble().isEqualTo(99.99d)` |
| asAFloat           | `Ensure.that(TOTAL_COST).value().asAFloat().isCloseTo(99.99f,0.01f)`|
| asABigDecimal      | `Ensure.that(TOTAL_COST).value().asABigDecimal().isEqualTo(new BigDecimal("99.99"))` |
| asADate            | `Ensure.that(CURRENT_DATE).value().asADate().isEqualTo(expectedLocalDate)`  |
| asATime            | `Ensure.that(CURRENT_TIME).value().asATime().isEqualTo(expectedLocalTime)` |
| asABoolean         | `Ensure.that(SOME_FLAG).value().asABoolean().is True()`   |
+--------------------+-------------------------------------------------+

If a date or time value uses as non-standard format, we can pass a
format string to the `asADate()` or `asATime()` methods:

```java
aster.attemptsTo(
    Ensure.that(ElementLocated.by("#currentDate"))
          .value()
          .asADate("dd-MM-yyyy")
          .isBefore(dateLimit)
);
```

# Making assertions about collections of web elements

You can make assertions about multiple values, for example, all the
titles of a list of search results.

One way to do this is to use the `Ensure.thatTheSetOf()` method (or its
synonym, `Ensure.thatAmongst()`). This method takes a `Target` or a
locator, and lets you apply the

```java
aster.attemptsTo(
        Ensure.thatTheSetOf(ElementsLocated.by(".train-line"))
              .hasSizeGreaterThan(5)
);
```

We can also use static methods defined in `TheMatchingElement` to
perform commonly used checks on web elements, e.g.

```java
aster.attemptsTo(
        Ensure.thatTheSetOf(ElementsLocated.by(".train-line"))
              .allMatch(TheMatchingElement.containsText("Line"))
);
```

The main methods defined in the `TheMatchingElement` class include:

| Assertion          | Example     |
| -----------        | ----------- |
| isDisplayed        | `Ensure.thatTheSetOf(RESULTS).allMatch(isDisplayed())` |
| isNotDisplayed     | `Ensure.thatTheSetOf(RESULTS).noneMatch(isNotDisplayed())` |
| isDisabled         | `Ensure.thatTheSetOf(INPUT_FIELDS).atLeast(1, isDisabled())`    |
| isNotDisabled      | `Ensure.thatTheSetOf(INPUT_FIELDS).atLeast(1, isNotDisabled())`   |
| isEnabled          | `Ensure.thatTheSetOf(INPUT_FIELDS).atLeast(1, isEnabled())`      |
|                    |                                |
| isNotEnabled       | `Ensure.thatTheSetOf(INPUT_FIELDS).atLeast(1, isNotEnabled())`  |
| hasCssClass        | `Ensure.thatTheSetOf(RESULTS).noMoreThan(1, hasCssClass("selected"))` |
| hasValue           | `Ensure.thatTheSetOf(RESULTS).anyMatch(hasValue("red"))`   |
| containsText       | `Ensure.thatTheSetOf(RESULTS).anyMatch(containsText("Red"))`  |
| containsOnlyText   | `Ensure.thatTheSetOf(RESULTS).anyMatch(containsOnlyText("Red Car"))`    |
| containsElementsLo | `Ensure.thatTheSetOf(RESULTS).anyMatch(containsElementsLocatedBy(".model"))`  |
+--------------------+-------------------------------------------------+

We can also make assertions about collections of matching values or the
text contents of matching elements. We can do this using the
`Ensure.that(...).values()`, `Ensure.that(...).textValues()` and
`Ensure.that(...).textContentValues()`. For example:

```java
aster.attemptsTo(
    Ensure.that(ElementLocated.by("#colors option"))
          .values()
          .contains("red","blue","green")
);
```

### Waiting for elements and defining timeouts

When working with asynchronous web applications, an element may not be
immediately ready when a test interacts with it. By default, Serenity
will wait for 5 seconds for an element to be present. Using the `Ensure`
class, we can fine-tune the amount of time we need to wait for an
element to become available. For example:

```java
Target SLOW_FIELD = Target.the("Slow field")
                          .locatedBy("#slow")

aster.attemptsTo(
        Ensure.that(SLOW_FIELD.waitingForNoMoreThan(Duration.ofSeconds(10)))
              .value()
              .isEqualTo("Marseille")
);
```

We can also build a delay into a `Target` field, if the same delay
should be applied everywhere the element is used:

```java
Target SLOW_FIELD = Target.the("Slow field")
                      .locatedBy("#slow")
                      .waitingForNoMoreThan(Duration.ofSeconds(5))
```

### Making assertions about the current page

There are also some `Ensure` methods that allow us to make basic
assertions about the page itself. For example, you can check the page
title like this:

```java
aster.attemptsTo(
        Ensure.thatTheCurrentPage().title().isEqualTo("Some Title")
);
```

Page-level assertions also include `currentUrl()`, `pageSource()` and
`windowHandle()`.

## Working with Screenplay Questions

So far we have been using the `Ensure.that*` methods with web page
locators and with field values. We can also use `Ensure.that*` methods
with arbitrary Screenplay questions. This can be used to write custom
`Question` classes or methods that query the state of the application
without using the UI, or which do more tailored queries of the UI.

For example,

```java
public Question<Integer> countOf(String todoItem) {
    return Question.about("todo status").answeredBy(
            actor -> // return some value related to a particular todo item
    );
}
```

We could then use the `Ensure.thatTheAnswerTo()` method to check the
result of this question:

```java
aster.attemptsTo(
        Ensure.thatTheAnswerTo("the count",
                               countOf("some-todo-item"))
              .isEqualTo(1)
);
```

We can also work with `Question` classes that return collections, using
the `Ensure.thatTheAnswersTo()` method. Suppose we had a Question that
returned a list of Strings:

```java
Question<Collection<String>> colors() {
    return Question.about("colors").answeredBy(
            actor -> // returns "red","green","blue"
    );
}
```

We could then use the `Ensure.thatTheAnswersTo()` method to make an
assertion about this question:

```java
aster.attemptsTo(
        Ensure.thatTheAnswersTo(colors()).contains("red")
);
```

## Reporting and hiding Ensure steps

Each `Ensure` performable will be reported in the Serenity report as a
separate step, including a short description of the expectation.
Sometimes, however, we want to use the `Ensure` statement as a way to
make sure the application is ready to continue the tests. In these
cases, we may prefer to leave the `Ensure` statement out of the reports.

We can do this using the `silently()` method:

```java
aster.attemptsTo(
    Ensure.that(ElementLocated.by("#firstName"))
          .silently()
          .isDisplayed()
);
```
