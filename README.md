# react-project-template

This is a template I created to quickly start new React projects.

## Contents

This template contains the following:

- Vite
- Typescript
- React
- Styled-Components
- Vitest
- React Testing Library
- ESLint
- Stylelint
- Prettier
- Lint-Staged
- Husky
- CI Workflow

## Vite

This project was initially created using:

```
npm create vite@latest . --template react-ts
```

<br />

I configured Vite to resolve the following absolute paths:

- `assets/`
- `components/`
- `contexts/`
- `hooks/`
- `store/`
- `styles/`
- `utils/`

These are what I personally use fairly often, but of course you can add your own additional paths, or remove any you don't plan on using.

If you prefer to pre-fix your paths with '@' (i.e. @components/.../...), you can edit the keys of the `alias:` property in `vite.config.ts`.

<br />

Additionally, Vitest was configured here, and it's settings can be found in the `test:` property.

## Typescript

For the most part, the configuration was left the way Vite set it up as.

<br />

I simply added the following for settings up absolute paths and Vitest:

```json
{
  "baseUrl": "src",
  "types": ["vitest/globals"]
}
```

## React

Again, I didn't really configure anything, but I did remove most of the default boilerplate that Vite's react-ts template adds.

## Styled-Components

Styled-Components is my prefered method for styling in React.

I went ahead and added a `globalStyles` setup in `src/styles`, and imported it into `App.tsx`.

The included css in `globalStyles` are just some fairly standard resets I personally use in most projects. These can be expanded upon, or even removed if necessary.

## Vitest & React Testing Library

As mentioned above, Vitest has been configured in `vite.config.ts`, as well as a `setupTests.ts` file in `/src` that simply imports `@testing-library/jest-dom` for access to the additional matchers.

<br />

I unfortunately had to add a random, useless test because apparently Vitest returns with exit code 1 when you have no tests. This means I had to add a test just to have a test so I can push to my repository.

## ESLint, Stylelint, Prettier

These have been setup with my personal configurations, which can all be found:

- [ESLint Config](https://github.com/JamesMcDoniel/eslint-config)
- [Stylelint Config](https://github.com/JamesMcDoniel/stylelint-config)
- [Prettier Config](https://github.com/JamesMcDoniel/prettier-config)

## Husky & Lint-Staged

Husky has been configured with the `pre-commit` hook that calls `lint-staged`.

lint-staged, of course, calls upon ESLint, Stylelint, and Prettier to lint and format their appropriate file types on files that have been staged.

## CI Workflow

Provided is a simple workflow that runs on `push` or `pull request` that checks for errors with linting, then runs Vitest unit tests.
