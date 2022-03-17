## [11.10](./jan/11-01) HTML intro

### intro

- History of HTML
- HTML document and the browser
- Defining the user

### Code Editor

- Setting up VSCode
- File directories
- Extensions (live server, prettier)
- Keyboard shortcuts

### Examining the boilerplate

- `<!DOCTYPE html>`
- meta tags
- Character set
- `<html>` is the root element
- `<head>`, `<body>`, `<title>`

### Content and Running

- Anatomy of an element (opening tag, content, closing tag)
- `<h1>` - `<h6>`, `<p>`
- Running our file locally and globally
- Commenting with <!-- [comment] -->
- The importance of clean, indented code

### HTML Text Formatting

---

## [12.10](./jan/12-01) HTML/CSS intro

### HTML Tables

- Tables header `<th>`, table row `<tr>` , table data `<td>`

### live server

- Extension installation
- Definition and Usage

### Lists: Indentation and Family

- `<ol>`, `<ul>`, `<li>`
- Changing presentation with `list-style-type`
- Descendent combinator
- Understanding nesting, parent - child relationship

### Hyperlinks

- Anchoring with `<a>`
- Linking pages
- ID linking
- Web links

### HTML `<nav>` Tag

- Definition and Usage

### HTML Iframes

- Iframe Syntax

### Introducing Style

- Writing CSS inline, internally and externally
- Anatomy of a declaration (selector, declaration, property, value)
- The `<link>` tag
- Commenting with `\*[comment]*\`

### Debugging with dev tools

- Debugging our CSS
- Modifying values

### Color in CSS

- Using keywords, RGB, RGBA, hex

---

## [13.1](./jan/13-01) HTM/CSS intro part two

### Understanding the cascade, specificity and inheritance

- Conflicting rules
- Specificity - selecting by element, class, ID

### Classes and IDs

- Targeting a unique element with the `id` attribute
- Targeting a group of elements with the `class` attribute

#### practice

---

## [17.10](./jan/17-01) CSS intro part 3

### Css Grouping Selectors

- Combining multiple selectors with `,`

### Hyperlinks

- Sending emails with `mailto:`

### Font Family

- Getting more fonts: Google fonts and css `@import` directive
- Providing fallbacks: font stack values for `font-family`

### Font Sizing

- Setting text size with `font-size
- Relative to root: `rem` sizing and the `:root` selector

### Color in CSS

- Using keywords, RGB, RGBA, hex
- Transparency and opacity

### Backgrounds Images

- `background-image` is for decoration not content
- `background-size`, `background-repeat`, `no-repeat`
- Setting multiple attributes with `background` shortcut

### Modeling Boxes

- Setting box width with `box-sizing: border-box;`
- Spacing out our boxes - `margin` is for outside, `padding` for inside
- Reset me softly - `* {margin: 0; padding:0; box-sizing: border-box;}`
- Margins, paddings, width and height on inline elements
- Changing boxes with css `display` and `inline`, `block` and `inline-block`

### CSS Borders

- border-width ,border-style,border-color
- shorthand properties
- border-radius

### Text Formatting

- color, letter-spacing , word-spacing
- line-height , text-align, text-indent
- text-decoration , text-transform

### Css assignment

---

## [18.10](./jan/18-01) CSS intro

### Font Sizing

- Relative to parent: `em` sizing and nesting
- Setting the base size:
  `:root { font-size: 62.5% }` and decimal `rem`s (1.2rem = 12px)

### Font Family

- Pre Installed System fonts: css `font-family: <font-name>`

### Stylish Text

- Thicker text with css `font-weight`, choosing font weights on google fonts
- Italics with css `font-style`
- Underline and line-through with css `text-decoration`
- Changing case with css `text-transform`

### Pseudo Classes

- Introducing state pseudo class
- Coloring links with `:hover`, `:active` and `:visited`
- Using MDN to locate additional selectors, combinators, elements and rules

### CSS units

- `px` and `%`
- `em` vs `rem`
- Use cases for the different units

### Using Images

- Introducing the `<img>` tag
- Framing our image with `border`
- Controlling corners with `border-radius`
- Using float (strictly with image and text)

### Positioning

- Understanding positioning - `static`, `relative`, `absolute`, `fixed`, `sticky`
- Position offsets - `top`, `bottom`, `right`, `left`
- Layering boxes with `z-index`

### Fancy Shapes

- Creating shapes using the the `border` property -
- Transforming shapes: `transform`, `rotate()`, `scale()`

---

## [19.10](https://github.com/FbW-WD21-E11/live-coding/tree/main/jan/19-01) CSS selectors

### HTML/Css assignment

### Css selectors

#### Basic selectors

- Universal selector `*`
- Type selector (Element selector)
- ID selector
- Class selector
- attribute selectors

#### Grouping selectors

- selector list "Combining multiple selectors with `,`"

#### Combinators

- Descendant combinator
- Child combinator
- General sibling combinator
- Adjacent sibling combinator
- Column combinator

#### Pseudo

- Pseudo classes `:hover`, `:visited`, `:focus` ,`:active`, `:checked`
- pseudo child selectors: `:nth-child()

### Forms and Dynamic Data

- Searching - `<form>`, `<input>`

---

## [20.01](./jan/20-01) Pseudo classes and elements

### Review

### CSS Variables:

Defining in `:root { --[name]: [value] }`

### pseudo elements VS pseudo classes

#### pseudo elements

- `::after` `::before `
- `::first-letter`
- `::placeholder` for styling `placeholder` text
- Using MDN to locate additional selectors, combinators, elements and rules

### CSS units

- `vh` and `vw`
- Use cases for the different units

#### Presentation pseudo classes and elements

---

## [24.01](https://github.com/FbW-WD21-E11/live-coding/tree/main/jan/24-01) Forms in Html

### Icon Fonts

- Conveying meaning without text: fontawesome
- Adding fontawesome to our websites: choosing the correct CSS links
- Sizing icons with Fontawsome sizing utility classes
- Alternatives to Fontawesome - flaticon, thenounproject.com

### Let The Light In

- Using `box-shadow` to emulate a light source
- Using multiple instances of `box-shadow`

### Forms and Dynamic Data

- Searching - `<form>`, `<input>`
- Sending forms to a URL - the `action` attribute
- Importance of names: `<input name=[...]>` attribute,
  `<label for=[...]>`
- URL structure & anatomy
- HTTP verbs - `GET`, `POST` and the `method` attribute
- `<form>`, `<fieldset>`, `<legend>`

### Styling our Form 2 - Use Case

- Creating a CSS only toggle switch

### Publishing with GitHub pages

---

## [25.01](https://github.com/FbW-WD21-E11/live-coding/tree/main/jan/25-01) intro to Flexbox

### HTML/CSS assignment

- Log-in page

### Revision

### Flexbox on parent elements

- Flexible boxes: `display: flex`, flex child & flex parent concept
- Aligning and justifying: `justify-content` and `align-items`

---

## [26.01](https://github.com/FbW-WD21-E11/live-coding/tree/main/jan/26-01) Flexbox

### Flexbox on parent elements

- Direction and wrapping: `flex-direction` and `flex-wrap`
- Small shorthand: `flex-flow`

### Flexbox on child elements

- Growing and shrinking: `flex-grow` and `flex-shrink`
- Base sizing: `flex-basis` and the `flex` shorthand
- Reordering children: `order` and `align-self`
- The perfect center:
- centering in fixed height parents with `display: flex` and `margin: auto`

### Html/Css assignment: Periodic Table

---

## [27.01](https://github.com/FbW-WD21-E11/live-coding/tree/main/jan/27-01) Building a web page

### Live coding session

- Building HTML/CSS web page

### Html/Css assignment:

- Creating a webpage using HTML/CSS : Mobile app

---

## [31.01](https://github.com/FbW-WD21-E11/live-coding/tree/main/jan/31-01) Grid intro

### CSS Grid on parent elements

- Making our grid container: `.container { display: grid }`
- Grid columns: css `grid-template-columns` and `fr` unit
- Setting max and min sizes: css `minmax([min], [max])`
- Spacing columns and rows - `gap`

### CSS Grid on child elements

- Spanning over several columns:
  `grid-column: [start] / [end];`, `span` keyword
- Spanning over several rows: `grid-row: [start] / [end];`

### Defining grid areas

- Template areas: setting the parent with keywords, css `grid-template-areas`
- Placing boxes in an area: css `grid-area`

---

## 01.02 Html / Css assignment

### working on Youtube clone assignment using Grid and FlexBox

---

## 02.02 Html / Css assignment

### Q & A

### working on Youtube clone assignment using Grid and FlexBox

---

## [03.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/03-02) Responsive Web Design

### Media queries

- Anatomy of a media query: `@media [media-type] ([media features]) { ... }`
- Default media type: `screen` is optional
- Common features: `(min-width: <size>)`
- Breakpoints: The "standard" bootstrap breakpoint values

---

## [07.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/07-02) Responsive Web Design part 2

### CSS Review

- Building a responsive web page

---

## [08.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/08-02) CSS Animations

### Custom Animations

- Creating custom animation scripts: `@keyframes [name] { ... }`
- Applying animations: `:hover` and `:focus`, css `animation`
- Controlling the script: `from`, `to` and `%` directives
- Changing the iteration and direction:
  `animation-iteration-count`, `animation-direction`
- Best Design Practices: When and how much transition and animation

---

## [09.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/09-02) CSS Animations part 2

### Built in Animations

- Transitioning property changes -
  css `transition: [prop] [duration] [timing]`
- Creating a nested navigation bar with `<nav>` and nested `<ul>`
- Showing dropdowns on `:hover` and `:focus`

---

## [10.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/10-02) Overview

### Building a webpage

### Basic UIB test

---

## [14.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/for-you-all) Valentine's Day animation ❤️

### Revision and Practice

---

## [15.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/15-02) CSS Frameworks

### Sass Introduction

- Official [Sass Web Site](https://sass-lang.com/)
- Sass superpowers
- Sass Basics

### [Project Structure ](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/sass)

---

## [16.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/16-02) Sass structure

### Build scripts: Using npm as a build tool

- Installing dependencies: `npm install`
- Running for development: `npm start`
- Building for publication: `npm run build`

### UIB advanced test

---

## [17.02](https://github.com/FbW-WD21-E11/live-coding/tree/main/feb/17-02) Sass part 2

### Sass Variables: an introduction

- Variables concept: "A box to keep values in"
- Sass variables: Defining with `$[name]: [value]`, Using with `$[name]`

### Sass Nesting

---

## [28.02]() Bootstrap

- Adding Bootstrap to our project (with CDNs) -
  JS dependencies and Bootstrap CSS, `<script src="...">`
- Content, Components, utilities -
  navigating the bootstrap documentation
- Using the Bootstrap grid system: grid classes and flex
- Smart copy pasting - read, understand, copy, modify
- Using Bootstrap components: Creating a page with close to 0 CSS
- customizing Bootstrap using Souce files

---

## [01.03](https://github.com/FbW-WD21-E11/live-coding/tree/main/mar/01-03) Bootstrap Revision

### Bootstrap Project

---

## [02.03](https://github.com/FbW-WD21-E11/live-coding/tree/main/mar/02-03) Sass mixins

### Sass Mixins: Predefined reusable rulesets

- Defining mixins: `@mixin [name](){ ... }`
- Using mixins: `@include [name]()`
- Parameters and arguments:
  `@mixin [name]([parameters])`, `@include [name]([arguments])`
- Main use case for mixins.

---

## [03.03](https://github.com/FbW-WD21-E11/live-coding/tree/main/mar/03-03) Sass maps/functions

### Sass maps: A collection of variables in one name

### Sass functions

---

## [07.03](https://github.com/FbW-WD21-E11/live-coding/tree/main/mar/07-03) Sass overview and loops

### SASS Revision

### Sass Loops

- for loops
