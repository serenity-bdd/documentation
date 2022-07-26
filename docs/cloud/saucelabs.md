---
id: saucelabs
title: SauceLabs
sidebar_position: 4
---
# Serenity BDD SauceLabs Integration

The `serenity-saucelabs` plugin provides seamless integration with the [SauceLabs](https://saucelabs.com/) online test automation platform. 

## Adding the SauceLabs plugin

To add the integrated support for LambdaTest to your project, you will need to add the `serenity-saucelabs` dependency to your project dependencies. For Mavenm, you would add the following:
```xml
    <dependency>
        <groupId>net.serenity-bdd</groupId>
        <artifactId>serenity-saucelabs</artifactId>
        <version>${serenity.version}</version>
    </dependency>
```

And for Gradle:
```groovy
    testImplementation "net.serenity-bdd:serenity-saucelabs:${serenityVersion}"
```

## Specifying your SauceLabs credentials and grid URL
Next, you will need a [SauceLabs account](https://saucelabs.com/pricing). 

Next you will need to configure your SauceLabs credentials (if you are logged on to the Saucelabs Dashboard [you can find these on this page]. The simplest way to do thiss is to define the following system properties:
* `SAUCE_USERNAME`- SauceLabs user name
* `SAUCE_ACCESS_KEY` - SauceLabs access key

Alternatively, you can define your username and accesskey using the `sauce.username` and `sauce.key` properties respectively in your `serenity.conf` file:

```hocon
sauce.username=myuser
sauce.key=XXXXXXXX
```

## Configuring the LambdaTest driver

Serenity interacts with SauceLabs via the `RemoteDriver` driver. You will need to specify the remote URL for the geographical region you want to use in the `webdriver.remote.url` property, like this:
```hocon
webdriver {
  driver = remote
  remote.url = "https://ondemand.us-west-1.saucelabs.com/wd/hub"
}
```

## Activating the LambdaTest plugin

The Serenity SauceLabs plugin will be invoked if Serenity can find a `"sauce:options"` section in your `serenity.conf` file, or if you specify a `remote.webdriver.url` that points to a SauceLabs server. If you have no Saucelabs-specific capabilities, simply set the `sauce.active` property to true like this:

```hocon
lambdatest {
  active = true
}
```

## Defining Saucelabs Capabilities

You can specify the operating system and browser you want to run your tests on by customising the [Selenium Capabilities](https://docs.saucelabs.com/dev/test-configuration-options/#desktop-and-mobile-capabilities-sauce-specific--optional) in your `serenity.conf` file. You do this in the `"sauce:options"` section of the `serenity.conf` file, e.g.

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


