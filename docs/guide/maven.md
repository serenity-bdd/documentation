---
id: maven
title: Using Maven with Serenity
sidebar_position: 3
---
# Integrating Serenity BDD into a Maven project

Serenity projects are typically built using either Maven or Gradle.

You can add Serenity BDD to an existing Maven project by adding the corresponding dependencies to your `pom.xml` file. All Serenity BDD projects need the following core dependency:

```
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-core</artifactId>
    <version>${serenity.version}</version>
    <scope>test</scope>
</dependency>
```

You will also need a test runner, which will usually be either JUnit 4, JUnit 5 or Cucumber.

## Serenity JUnit 4 Dependencies
To use JUnit 4 you will need the following dependency:

```
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-junit</artifactId>
    <version>${serenity.version}</version>
    <scope>test</scope>
</dependency>
```

## Serenity JUnit 5 Dependencies
To use JUnit 5 you will need the following dependency:

```
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-junit5</artifactId>
    <version>${serenity.version}</version>
    <scope>test</scope>
</dependency>
```

You will also need the JUnit 5 dependencies, e.g.
```
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>${junit5.version}</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-engine</artifactId>
    <version>${junit5.version}</version>
    <scope>test</scope>
</dependency>
```

## Serenity Cucumber Dependencies

For Cucumber you will need the following dependency:

```
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-cucumber</artifactId>
    <version>${serenity.version}</version>
    <scope>test</scope>
</dependency>
```

Since Serenity relies on a specific version of the Cucumber APIs, we do not recommend including an exlicit dependency on a particular version of the Cucumber libraries.

## Screenplay
If you are using the Screenplay pattern, you will also need the Screenplay dependencies:
```
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-screenplay</artifactId>
    <version>${serenity.version}</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-rest-assured</artifactId>
    <version>${serenity.version}</version>
</dependency>
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-ensure</artifactId>
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

## The Serenity Maven Plugin

If you want to generate the Serenity reports whenever you run `mvn verify`, you can use the `serenity-maven-plugin` to do that:
```
<plugin>
    <groupId>net.serenity-bdd.maven.plugins</groupId>
    <artifactId>serenity-maven-plugin</artifactId>
    <version>${serenity.version}</version>
    <configuration>
      <tags>${tags}</tags>
    </configuration>
    <executions>
        <execution>
            <id>serenity-reports</id>
            <phase>post-integration-test</phase>
            <goals>
                <goal>aggregate</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

## The Serenity Maven Goals
The most common way to run the Serenity tests in this configuration is to run `mvn verify`, which will run the full test suite and generate the Serenity reports in the `target/site/serenity` folder.

Some of the other goals are described in the following sections:

### The Aggregate goal
Serenity does not generate the report after each test, but rather waits until the full test suite is complete. If you want to regenerate the reports, or generate the reports for the current set of test results, you can use the **aggregate** goal:
```
mvn serenity:aggregate
```

### The Check goal
Sometimes (for example during a CI build process) you may need to check the status of a test run after running it. You can do this using the **check** goal:
```
mvn serenity:check
```

### The Reports goal
In addition to the main Serenity report, Serenity allows you to configure other reports (see below). These are automatically generated when you run `mvn verify`, but if you need to generate them separately, you can use the **reports** goal:
```
mvn serenity:reports
```


## Serenity Maven Configuration Options

There are many configuration options you can use to fine-tune the Serenity reporting. Some of them are detailed here.


### Reports

You can generate additional reports with Serenity through the Maven plugin. This involves two steps. Firstly, you need to add the `<reports>` section to the `<configuration>` section of the `serenity-maven-plugin` plugin. This configuration option takes a comma-separated list of custom report names. A common example is the `single-page-html` report, which generates a self-contained summary of the test results in HTML form in a file called `serenity-summary.html` `target/site/serenity` folder. This can be useful in CI builds to provide a quick summary of the test results to stakeholders.

Secondly, you need to add the dependencies containing the custom reports to the plugin `<dependencies>` section.

The full plugin configuration to activate the single page HTML report is shown below:
```xml
<plugin>
    <groupId>net.serenity-bdd.maven.plugins</groupId>
    <artifactId>serenity-maven-plugin</artifactId>
    <version>${serenity.version}</version>
    <configuration>
        <reports>single-page-html</reports>
    </configuration>
    <executions>
        <execution>
            <id>serenity-reports</id>
            <phase>post-integration-test</phase>
            <goals>
                <goal>aggregate</goal>
            </goals>
        </execution>
    </executions>
    <dependencies>
        <dependency>
            <groupId>net.serenity-bdd</groupId>
            <artifactId>serenity-single-page-report</artifactId>
            <version>${serenity.version}</version>
        </dependency>
    </dependencies>
</plugin>
```
