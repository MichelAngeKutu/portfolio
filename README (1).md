# Personal Portfolio Website

A responsive four-page portfolio website built from scratch with **HTML**, **CSS** and **JavaScript** (no frameworks or libraries). Built as a course project for Web Programming at Algonquin College.

**Live site:** https://michelangekutu.github.io/portfolio/

## Pages

| Page | Content |
|---|---|
| **Home** (`index.html`) | Short introduction, personal motto and quick links |
| **Resume** (`resume.html`) | Summary, work experience, skills, education and certifications |
| **Projects** (`projects.html`) | Project gallery with category filters |
| **Contact** (`contact.html`) | Contact form with built-in validation |

## Features

- **Project filter (JavaScript):** buttons show or hide projects by category, using `data-` attributes and `classList`, with the active button highlighted
- **CSS Grid gallery:** project cards adjust automatically from 3 columns on a computer to 1 on a phone
- **Responsive design:** Flexbox, `flex-wrap` and a media query for small screens
- **Form validation (HTML5):** `required`, `type="email"`, `minlength` and `maxlength`
- **Accessibility:** semantic tags (`header`, `nav`, `main`, `footer`), descriptive `alt` text, connected labels, and `:focus` styles for keyboard users
- **One shared stylesheet** with CSS variables for a consistent colour palette
- HTML and CSS validated with the W3C validators

## Project structure

```
portfolio/
├── index.html
├── resume.html
├── projects.html
├── contact.html
├── style.css
├── script.js
└── images/
```

## Run it locally

Download the repository and open `index.html` in any browser. No installation needed.

## Tools

HTML5, CSS3, JavaScript, Visual Studio Code, W3C Markup and CSS Validators, Git/GitHub
