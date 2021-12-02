export default {
  "title": "Serenity BDD Users Manual",
  "tagline": "Automated Acceptance Testing With Style",
  "url": "https://www.serenity-bdd.info",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "serenity-bdd",
  "projectName": "serenity-core",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/john/Projects/Serenity/serenity-new-documentation/serenity-users-guide/sidebars.js",
          "editUrl": "https://github.com/serenity-core/serenity-docs/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://johnfergusonsmart.com/blog"
        },
        "theme": {
          "customCss": "/Users/john/Projects/Serenity/serenity-new-documentation/serenity-users-guide/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Home",
      "logo": {
        "alt": "Serenity BDD Logo",
        "src": "img/serenity-bdd-small.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "first_test",
          "position": "left",
          "label": "Tutorials"
        },
        {
          "type": "doc",
          "docId": "guide/user_guide_intro",
          "position": "left",
          "label": "User Manual"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "http://www.johnfergusonsmart.com/support",
          "label": "Get Support",
          "position": "right"
        },
        {
          "href": "http://expansion.serenity-dojo.com",
          "label": "Learn Serenity BDD Online",
          "position": "right"
        },
        {
          "href": "http://expansion.serenity-dojo.com",
          "label": "Serenity BDD Coaching",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/first_test"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Gitter",
              "href": "https://gitter.im/serenity-bdd/serenity-core"
            },
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/serenity-bdd"
            }
          ]
        },
        {
          "title": "Learn Serenity BDD",
          "items": [
            {
              "label": "The Serenity Dojo Training Library",
              "href": "http://expansion.serenity-dojo.com"
            },
            {
              "label": "Personalised Serenity BDD Coaching",
              "href": "https://www.serenity-dojo.com/apply"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/serenity-bdd/serenity-core"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Serenity Dojo Ltd."
    },
    "prism": {
      "additionalLanguages": [
        "java",
        "scala"
      ],
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};