# Sheikh Yahyah An-Nahari

## A brief description of the project

Sheikh Yahyah An-Nahari website is an online that set out the goal of benefitting mankind with the knowledge of the Qur'an and Sunnah In Shaa Allah.

## Preview

## Getting Started

Prerequisites include NodeJS v16 and yarn. See Nextjs's Development Environment Setup documentation for more details or issues with initial project installation.

- `Nodejs version 16 or higher`
- `NPM`

1. First, clone this repo :
   `git clone https://github.com/AOMuiz/ataasil`

Navigate to the root folder and install all dependencies :

- `npm i`

2. Run the development server:

- Terminal run

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Folder Structure

```
|-- locales/
  |-- ar/
  |-- en-US/
|-- src/
    |-- components/
    |-- assets/
        |-- fonts/
        |-- icon/
        |-- images/
    |-- hooks/
    |-- redux/
    |-- pages/
     |-- index.js/
     |-- about/
        |-- index.js
    |-- utils/
        |-- lib/
        |-- index.js
        |-- constants.js
        |-- helpers.js
    |-- App.js
```

- `locales`:
- `shared/assets`: Folder to put assets like fonts, icons and images
- `components`: Folder to put all shared Component
- `utils` : Folder to put our helpers function like Consume API and formating data or others helpers and utilities.
- `hooks` : Folder to put all of ours custom hooks/logic for component.
- `pages` : Folder to put our different screens for our app such as `home screen`.

## Technologies Used

1. Used `React Js` and `Nextjs` for building the website.

2. Implemented website styling using [`twin.macro(styled Components and tailwindcss)`]([https://github.com/ben-rogerson/twin.examples/tree/832a3b5c2fc1c83dad90859f6f5129506e686db8/next-styled-components).

3. Used `nextjs` internationalized routing and `next-translate` or other packages such as `react-intl`,
   `react-i18next` npm package for internationalization(i18n) and localization.

4. Used `Redux Toolkit` for data and state management.

5. Created `Custom Hooks` for handling fetched data and rendering.

## Style Utilities

### Relative Unit

This project using relative unit based 16px. so you can use `1rem` which means `106px` properties in css to help ours styling more easier handling Resposive.

### Media Queries

#### Relative Unit

| BREAKPOINTS | Values |
| ----------- | ------ |
| phone       | 600    |
| tablet      | 950    |
| laptop      | 1300   |

#### QUERIES

phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,

## Getting Started with Contributions

Contributions are made to this repo via Issues and Pull Requests (PRs), read more in the [Contribution Guideline](./CONTRIBUTING.md). A few general guidelines that cover both:

- Search for existing Issues and PRs before creating your own.
- We work hard to makes sure issues are handled in a timely manner but, depending on the impact, it could take a while to investigate the root cause. A friendly ping in the comment thread to the submitter or a contributor can help draw attention if your issue is blocking.
- If you've never contributed before, see [the first timer's guide on our blog](https://auth0.com/blog/a-first-timers-guide-to-an-open-source-project/) for resources and tips on how to get started.

### Issues

Issues should be used to report problems with the project, request a new feature, or to discuss potential changes before a PR is created. When you create a new Issue, a template will be loaded that will guide you through collecting and providing the information we need to investigate.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

### Pull Requests

PRs to our project are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

- Only fix/add the functionality in question **OR** address wide-spread whitespace/style issues, not both.
- Add unit or integration tests for fixed or changed functionality (if a test suite already exists).
- Address a single concern in the least number of changed lines as possible.
- Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).

For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first. This is not required but can save time creating and reviewing changes.

In general, we follow the follow guidelines

1. Visit the project repository
2. Create a remote branch with a succinct but descriptive name e.g aomuiz_create_hero_section
3. Create and issue and link to the created/repective branch
4. Clone the project to your machine
5. Pull the remote branch onto your local machine
6. Commit changes to the branch
7. Following any formatting and testing guidelines specific to this repo
8. Push changes to the remote repository
9. Open a PR in our repository and follow the PR template so that we can efficiently review the changes.
