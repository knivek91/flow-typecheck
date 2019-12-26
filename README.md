## Description

Easy setup of `flow` with `react`, just playing around with `flow` to understand some features and create dump components to pass around data.

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
Just install the dependencies with 
> *yarn install*

I added `flow`, with these steps:

* yarn add flow-bin (or `npm install --save flow-bin`)
* create `flow` file (*.flowconfig*) with `yarn flow init` (or `npm run flow init`)
* create a snippet in the *package.json* (script section) for running flow, could be `"typecheck: flow"`.
* just add `// @flow` in the top of the files you want to check 
* now you can run *flow*, so you can do `yarn typecheck` (or `npm run typecheck`) in the console.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Flow 

Use [flow](https://flow.org/) for doing the type check in the app

## Husky

Used to check `pre-commit git hook` 

## lint-staged

Just to run some  rules in the code before any `git add` 
