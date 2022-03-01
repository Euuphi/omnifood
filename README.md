# Omnifood Website

### Links

-   Live Site URL: [Omnifood Website](https://reverent-kare-b299f0.netlify.app/)
-   Code URL: [Github](https://github.com/Euuphi/omnifood)

## Table of contents

-   [Overview](#overview)
    -   [The Project](#the-project)
    -   [Screenshots](#screenshots)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The Project

Build a website for Omnifood company to advertise and help their customers learn more about their product and services.

### Screenshot

![](./screenshot.png)

## My process

### Built with

-   [React](https://reactjs.org/) - JS Framework Library
-   [CSS Modules](https://github.com/css-modules/css-modules) - For styles
-   [React Scroll](https://www.npmjs.com/package/react-scroll) - For smooth scrolling on links
-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Desktop-first workflow

### What I learned

-   How to use an intersection observer in order to track visibility of a section within the viewport

```js
// Ref to hero section
const heroRef = useRef();

// State to track visibilty of hero section in the viewport
const [heroVisible, setHeroVisible] = useState(true);

// Effect to set and track visibility of hero section in the viewport
useEffect(() => {
    const heroObserver = new IntersectionObserver(
        (entries) => {
            const [entry] = entries;
            setHeroVisible(entry.isIntersecting);
        },
        {
            root: null,
            threshold: 0,
        }
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
}, [heroRef]);
```

-   Use of CSS variables

```css
html {
    /* CSS global variables */
    --color-primary: #e67e22;
    --color-shade: #cf711f;
    --color-tint-light: #fdf2e9;
}

.sectionHero {
    background-color: var(--color-tint-light);
}
```

-   How to fix horizontal overflow not being hidden on mobile. By wrapping the entire HTML body into a div with the css class:

```css
.hidden {
    overflow-x: hidden;
    position: relative;
}
```

-   How to use "role" and "aria-label" properties in order to use a div element as an image

```html
<div
    className="{styles.ctaImageBox}"
    role="img"
    aria-label="A woman enjoying food"
></div>
```

-   Use of select element in a form

```html
<div>
    <label htmlFor="selectWhere">
        Where did you hear from us?
    </label>
    <select
        id="selectWhere"
        required
        value={select}
        onChange={(event) => setSelect(event.target.value)}>
        <option value="">Please choose one option:</option>
        <option value="friends">Friends and Family</option>
        <option value="youtube">YouTube</option>
        <option value="podcast">Podcast</option>
        <option value="facebook">Facebook ad</option>
        <option value="others">Others</option>
    </select>
</div>
```

### Continued development

-   Continue to build on my understanding of CSS Grid and how to manipulate it's properties to create flexible page layouts
-   Continue expanding my knowledge of various HTML elements and their implementaions and uses in semantic HTML markup
-   More uses of intersection observers and how to use it along-side animations to create seemless transitions

### Useful resources

-   [Intersection Observer with React](https://dev.to/producthackers/intersection-observer-using-react-49ko) - Great resource on use of Intersection Observer with React Framework
-   [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Complete guide on understanding basics and advance uses of CSS Grid

## Author

-   Website - [Steven Nguyen](https://github.com/Euuphi)

## Acknowledgments

The design of this site comes from a project by Jonas Schmedtmann on his Udemy course: **Build Responsive Real-World Websites with HTML and CSS**. I have learned a lot trying to clone his design from basic HTML and CSS and translating it into my own React Application.
