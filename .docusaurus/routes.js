
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','910'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/locatorless-elements',
    component: ComponentCreator('/blog/tags/locatorless-elements','ce9'),
    exact: true
  },
  {
    path: '/blog/tags/reporting',
    component: ComponentCreator('/blog/tags/reporting','38c'),
    exact: true
  },
  {
    path: '/blog/tags/selenium-4',
    component: ComponentCreator('/blog/tags/selenium-4','df1'),
    exact: true
  },
  {
    path: '/blog/whats-new-in-serenity-3.1.0',
    component: ComponentCreator('/blog/whats-new-in-serenity-3.1.0','8f2'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/screenplay/web/screenplay-web-elements',
    component: ComponentCreator('/screenplay/web/screenplay-web-elements','064'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','e04'),
    routes: [
      {
        path: '/docs/first_test',
        component: ComponentCreator('/docs/first_test','f70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guide/maven',
        component: ComponentCreator('/docs/guide/maven','d9c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guide/user_guide_intro',
        component: ComponentCreator('/docs/guide/user_guide_intro','a01'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorials/cucumber',
        component: ComponentCreator('/docs/tutorials/cucumber','bde'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorials/screenplay',
        component: ComponentCreator('/docs/tutorials/screenplay','758'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
