# Quiz App

UI for quiz application

## Home Page URL

'https://cj179john.github.io/quiz-app'

## TODO

In the front end app, Session storage was used to contain the processed questions. This is unnecessary when redux is used for state management. A better approach would be splitting the "AllRounds" component to a hierarchy of components. Such as, "Rounds" -> "Round" -> "Questions".So, the processed questions can be maintained by a parent state rather than getting refresh with everything bundled in a much larger component as wha it is now. 

A PR has been created for the comments above: https://github.com/cj179john/quiz-app/pull/1

Also, automated deployment script and pipline scripts would be needed for smooth deployment processs

## Environment Variables

export REACT_APP_API_URL='http://localhost:3009'

## Create React App boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Deployment

Execute `yarn deploy` to deploy the app on github pages.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3009](http://localhost:3009) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn deploy`

Build the app for production to the `build` folder.<br />
Deploy the built app to github page hosting platform in the master branch.<br />
