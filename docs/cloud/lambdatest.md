---
id: lambdatest
title: LambdaTest
sidebar_position: 2
---
# Serenity BDD LambdaTest Integration

LambdaTest is a cloud platform for test execution and test orchestration. With LambdaTest, Serenity users can extend their automation test coverage of their web and mobile apps on 3000+ real devices, browsers, and operating systems.

The `serenity-lambdatest` plugin provides seamless integration with the [LambdaTest](https://www.lambdatest.com/) online test automation platform. 

## Adding the Lambdatest plugin

To add the integrated support for LambdaTest to your project, you will need to add the `serenity-lambdatest` dependency to your project dependencies. For Maven, you would add the following:
```xml
    <dependency>
        <groupId>net.serenity-bdd</groupId>
        <artifactId>serenity-lambdatest</artifactId>
        <version>${serenity.version}</version>
    </dependency>
```

And for Gradle:
```groovy
    testImplementation "net.serenity-bdd:serenity-lambdatest:${serenityVersion}"
```

## Specifying your LambdaTest credentials and grid URL
Next, you will need a [LambdaTest account](https://accounts.lambdatest.com/register) (If you don't already have one you can set up a free lifetime account to experiment). 

You can add your [LambdaTest credentials](https://www.lambdatest.com/support/docs/using-environment-variables-for-authentication-credentials/) in two ways. The simplest is to define the following system properties:
* `LT_USERNAME` - LambdaTest user name
* `LT_ACCESS_KEY`- LambdaTest access key

Alternatively, you can define your username and accesskey using the `lt.user` and `lt.key` properties respectively in your `serenity.conf` file:

```hocon
lt.user=myuser
lt.key=XXXXXXXX
```

By default the standard LambdaTest grid URL ("hub.lambdatest.com") will be used to connect to the LambdaTest servers, but you can override this by setting the `lt.grid` property:

```hocon
lt.grid = "mycustomhub.lambdatest.com"
```

## Configuring the LambdaTest driver

Serenity interacts with LambdaTest via the `RemoteDriver` driver. You can specify the remote URL explicitly, or let the `serenity-lambdatest` library do it for you. For example, to configure the URL explicitly you could use a `serenity.conf` configuration like this:
```hocon
webdriver {
  driver = remote
  remote.url = "https://"${LT_USERNAME}":"${LT_ACCESS_KEY}"@hub.lambdatest.com/wd/hub"
}
```

If the `webdriver.remote.url` property is not defined, Serenity will use these values to build one for you if the LambdaTest plugin is active (see below).

## Activating the LambdaTest plugin

The Serenity LambdaTest plugin will be invoked if Serenity can find a `"LT:Options"` section in your `serenity.conf` file, or if you specify a `remote.webdriver.url` that points to a LambdaTest server. If you have no LambdaTest-specific capabilities, simply set the `lambdatest.active` property to true like this:

```hocon
lambdatest {
  active = true
}
```

## Defining LambdaTest Capabilities

You can specify the operating system and browser you want to run your tests on by customising the [Selenium Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/) in your `serenity.conf` file. You do this in the `"LT:Options"` section of the `serenity.conf` file, e.g.

```hocon
    webdriver {
      driver = "remote"
      capabilities {
        browserName = "chrome"
        version = "104.0"
        platform = "Windows 10"
        #
        # Any LambdaTest-specific options go in the 'LT:Options' section
        #
        "LT:Options" {
          resolution", "1280x800"
          network = true // To enable network logs
          visual = true // To enable step by step screenshot
          video = true // To enable video recording
          console = true // To capture console logs
        }
      }
    }
```

Note that the `w3c` option will be set to `true` by default, as this is the default protocol for the Selenium version integrated with Serenity.

The LambdaTest test name will be assigned automatically. You can also set the _build_ name by assigning the `lambdatest.build` property.
For example the following example shows how to create a build name from the Jenkins job name and build number environment variables:

```hocon
lambdatest {
  build = "${JOB_NAME} - build ${BUILD_NUMBER}"
}
```

These properties will be placed in the `LT:Options` capability.

:::tip

LambdaTest provides a convenient [Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) that gives an idea of what options are available.

:::


