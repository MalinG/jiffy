# CSS

## PostCSS Plugins

Det här projektet använder sig av [PostCSS](https://github.com/postcss/postcss). Om du fortfarande är kungen av Sass, kan du nestla dig vidare, PostCSS gör exakt samma sak som Sass men lite till.

* `postcss-import`: `@import` stylesheets till ett enda stort.

* `postcss-simple-vars`: Gör det möjligt att använda `$variabler` i din CSS fil.

* `postcss-focus`: Lägger till `:focus` till varje selector som `:hover`.

* `autoprefixer`: Vendor prefixing för webbläsaren, 2 versioner bakåt.

* `cssnano`: Optimerar och minimerar CSS filerna

* `postcss-reporter`: Varningar.


## Struktur

The boilerplate comes with a basic folder structure to keep the CSS files organised. This is what the folders are for:

* `base`: globalt

* `components`: knappar, modules etc..

* `layout`: layouts som header, footer, homepage

* `utils`: mixins,extends och funktioner

* `vendor`: Reset filer

* `main.css`: Importerar filerna in i ett stylesheet.


## Suit

Vi använder CSS Archekituren [Suit](https://suitcss.github.io/). Följ best practices.


## Gulp

Gulp övervakar css ändringar, kör på med

`gulp`
