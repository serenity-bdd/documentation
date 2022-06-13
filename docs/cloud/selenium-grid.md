---
id: selenium-grid
title: Running Serenity Tests with Selenium Grid
sidebar_position: 1
---
# Introduction

[Selenium Grid](https://www.selenium.dev/documentation/grid/) allows the execution of WebDriver scripts on remote machines (virtual or real) by routing commands sent by the client to remote browser instances. It aims to provide an easy way to run tests in parallel on multiple machines. 

Selenium Grid 4 takes advantage of a number of new technologies in order to facilitate scaling up while allowing local execution.

The simplest way to start with Selenium Grid is to run a standalone instance on your local machine. This allows you to make sure your Serenity configuration has been correctly set up to use the Selenim grid. 

To try this own, download the latest `selenium-server` jar file from [the Selenium website](https://www.selenium.dev/downloads/). Then start up the server with the following command:

```
java -jar selenium-server-<version>.jar standalone
```

This will start up the local instance of the Selenium Grid server. You can check out the dashboard on [http://localhost:4444/ui](http://localhost:4444/ui).

You can cofigure your tests to run against this server by setting three properties:
 - Set the `webdriver.driver` property to `remote` 
 - Set the `webdriver.remote.url` property to the address of your Selenium Grid instance (http://localhost:4444 by default)
 - Set the `webdriver.remote.driver` property to the name of the driver you want to run (e.g. "chrome")

```conf
webdriver {
  driver = remote
  remote {
    url="http://localhost:4444"
    driver=chrome
  }
 }
```

However, running the Selenium Grid locally is really only suitable for experimenting, as the tests will depend on you having the drivers on the system path of your local machine, which you do not need to do when using standard Serenity. A better approach is to use a Docker instance to run your Selenium Hub (see https://github.com/SeleniumHQ/docker-selenium). If you have Docker installed on your machine, this is easy to do.





