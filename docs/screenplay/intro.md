---
id: user_guide_screenplay_intro
sidebar_position: 1
---
# Screenplay Fundamentals

The Screenplay Pattern is a modern test automation design pattern intented to make it easier to write scalabble, maintainable test code. You can get a quick overview of a simple Screenplay test [here](../..//docs/tutorials/screenplay).

In this section, we will look at how to write high quality test automation using the Screenplay pattern in more detail. We will intially focus on interacting with a web application using Selenium - in the following sections, we will see how to interact with APIs and databases using the Screenplay model.

In Screenplay we model _actors_ who interact with an application in various ways to perform _tasks_ that help them acheive their goals. Actors have _abilities_, such as the ability to interact with a web browser or query a database, that help them perform these tasks. Actors can also answer _questions_ about the state of the system, so that we can check whether a feature is behaving the way we would expect it to.

![](img/screenplay-model.svg)

## Setting up a Screenplay test
Serenity BDD Screenplay tests can be written using any framwork that works with Serenity BDD. We will start by discussing how to set up a simple Serenity Screenplay test case using common libraries such as JUnit 4, JUnit 5 and Cucumber.

### Screenplay and JUnit 4

Running a Screenplay test in JUnit 4 and JUnit 5 is no different to any other Serenity BDD test. For JUnit 4, add the `serenity-junit` dependency to your project if it is not already there:
```xml
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-junit</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-screenplay</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-screenplay-webdriver</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
```

Next, use the `SerenityRunner` class in your test class, like this:

```java
import net.serenitybdd.junit.runners.SerenityRunner;
import org.junit.Test;

@RunWith(SerenityRunner.class)
public class AddNewTodos {

    @Test
    public void addToEmptyList() {...}
}
```

### Screenplay and JUnit 5
For JUnit 5, just add the following dependency to your project (this will also support legacy JUnit 4 tests):
```xml
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-junit5</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-screenplay</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-screenplay-webdriver</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
```
Next, you need to use the `SerenityJUnit5Extension` class, like this:
```java
import net.serenitybdd.junit.runners.SerenityJUnit5Extension;
import org.junit.jupiter.api.Test;

@RunWith(SerenityRunner.class)
class AddNewTodos {

    @Test
    @DisplayName("Add a todo item to an empty list")
    void addToEmptyList() {...}
}
```

### Screenplay and Cucumber

To run a Screenplay scenario with Cucumber and Serenity, you just need the standard Screenplay dependencies along with the `serenity-cucumber` dependency, as shown below:
```xml
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-cucumber</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-screenplay</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-screenplay-webdriver</artifactId>
            <version>${serenity.version}</version>
            <scope>test</scope>
        </dependency>
```

There is no difference when running the Cucumber scenarios either - you simply use the same JUnit 4 runner class as you would for a normal Serenity Cucumber scenario:

```java
import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "classpath:features"
)
public class TestSuite {}
```

## Defining the actors

Every Screenplay test needs at least one actor (and some have several). There are several ways we can define an actor, which vary slightly depending on the test framework you are using.

### Actors in JUnit

One way to create a new actor is to use the `Actor.named()` method. For example, to create an actor named Toby, we could write the following:

```java
Actor toby = Actor.named("Toby");
```

However this actor will not be able to do very much until we give him the ability to interact with our application. That's where _abilities_ come into play.

The most commonly-needed ability is the ability to browse the web using a web automation library such as Selenium or Playwright. In a Serenity JUnit test, we can use the `@Managed` annotation to manage the WebDriver lifecycle. Once we have a driver available, we can assign it to an actor using the `BrowseTheWeb` class like this:

```java
@ExtendWith(SerenityJUnit5Extension.class)
class AddNewTodosWithAManagedDriver {

    @Managed
    WebDriver driver;

    @Test
    @DisplayName("Add a todo item to an empty list")
    void addToEmptyList() {
        Actor toby = Actor.named("Toby")
                          .whoCan(BrowseTheWeb.with(driver));
    ...
    }
}
```

### Actors in Cucumber

Setting up actors in Cucumber is a little more compicated than in JUnit, because we generally refer to them by name in the Cucumber scenarios. Suppose for example we want to automate the following scenario:

```gherkin
  Scenario: Add items to an empty list
    Given Toby starts with an empty list
    When he adds "Buy some milk" to his list
    Then the todo list should contain the following items:
      | Buy some milk |
```

#### Using a Managed driver with Cucumber
We can use the same approach as we used for JUnit in our Cucumber step definition files, declaring a Webdriver instance using the `@Managed` annotation and assigning it to our actor using the `BrowseTheWeb` ability class:

```java
public class TodoStepDefinitions {

    @Managed
    WebDriver driver;

    Actor toby = Actor.named("Toby");

    @Before
    public void setupActor() {
        toby.can(BrowseTheWeb.with(driver));
    }

    @Given("Toby starts with an empty list")
    public void stats_with_an_empty_list() {
        toby.attemptsTo(
                Open.url("https://todomvc.com/examples/angularjs/#/")
        );
    }
```

However, the name of the actor ("Toby") is part of the scenario steps. We may want to have other scenarios with other actors, or have a scenario involving more than one actor. 

#### Casts and Stages
We can make our Cucumber step definitions more flexible by introducing the concept of a _Cast_ of actors, and a _stage_ on which they perform. 

A _Cast_ is a class whose job is to provide actors with a specific set of abilities, when we need them to play a role in our tests. For example, we can use the `OnlineCast` class to provide actors who are equiped with their own Webdriver instances. This way, we don't need to declare the `@Managed` driver, and each actor can have their own browser if we have a scenario with more than one actor.

A _stage_ is where our actors perform their roles. A scenario has a single stage, that we can use to identify an actor by name or find the currently active actor. 

We need to assign a cast to the stage at the start of each scenario; we can do this by calling the `OnStage.setTheStage()` method and passing in a specific cast, like this:

```java
OnStage.setTheStage(new OnlineCast());
```

Once we have set the stage, we can obtain an actor with a given name using the `OnState.theActorCalled()` method, like this:
```java
Actor toby = OnStage.theActorCalled("Toby");
```

Using this approach, we could implement the first step of our scenario in a way that will work no matter which actor is involved, like this:
```java
    @Given("{word} starts with an empty list")
    public void stats_with_an_empty_list(String actorName) {
        Actor actor = OnStage.theActorCalled(actorName);
        actor.attemptsTo(
                Open.url("https://todomvc.com/examples/angularjs/#/")
        );
    }
```

We could even define a custom Cucumber expression so that we don't have to call the `OnStage.theActorCalled()` method each time:
```java
    @ParameterType(".*")
    public Actor actor(String actorName) {
        return OnStage.theActorCalled(actorName);
    }

    @Given("{actor} starts with an empty list")
    public void stats_with_an_empty_list(Actor actor) {
        actor.attemptsTo(
                Open.url("https://todomvc.com/examples/angularjs/#/")
        );
    }
```

This way, our next step can simply use a parameter of type `Actor`, like this:
```java
    @When("{actor} adds {string} to his list")
    public void he_adds_to_his_list(Actor actor, String item) {
        actor.attemptsTo(
                Enter.theValue(item).into(".new-todo").thenHit(Keys.RETURN)
        );
    }
```

#### The Actor in the spotlight

Sometimes a step does not refer to an actor by name, but implicitly refers to the last actor who did anything in the scenario. For example, the third step, "Then the todo list should contain the following items..." does not have an explicit actor. 

In these situations, we can use the `OnStage.theActorInTheSpotlight()` method to refer to the last known active actor. For example, we could implement the third step of our scenario like this:

```java
    @Then("the todo list should contain the following items:")
    public void the_todo_list_should_contain(List<String> expectedItems) {
        Actor currentActor = OnStage.theActorInTheSpotlight();
        var todos = currentActor.asksFor(Text.ofEach(".todo-list li"));
        assertThat(todos).containsExactlyElementsOf(expectedItems);
    }
```

## Grouping interactions into tasks

Screenplay aims to make it easy to write maintainable and scaleable automation code. And an important way to do this is by grouping interactions into reusable sequences that represent higher level domain concepts.

For example, the following test shows how to login to the https://www.saucedemo.com/ test site:

```java
        toby.attemptsTo(
                Open.url("https://www.saucedemo.com/"),
                Enter.theValue("standard_user").into("#user-name"),
                Enter.theValue("secret_sauce").into("#password"),
                Click.on("#login-button")
        );
```


For example, in the previous section we saw the following code:

```java
    toby.attemptsTo(
            Open.url("https://todomvc.com/examples/angularjs/#/")
    );
```


## Questions - querying the state of the system

Now that we have seen how to set up a Screenplay test using different frameworks, how to organise interactions into tasks, and how to query the state of the system, we will look at how to use Screenplay to interact with a web application in more detail.

