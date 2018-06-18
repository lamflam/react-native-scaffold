# React Native Scaffold
An opinionated basic React Native app starter kit.

## Getting started
### Installation
1. `git clone git@github.com:lamflam/react-native-scaffold.git`
2. `cd react-native-scaffold`
3. `yarn`

### Running the app
1. Running the app in development requires a development server to be running.\
To start the server run `yarn start-dev-server` (best if done in a separate shell)
2. To run the app in the simulator, run `yarn run-ios`.

### Scripts
| Command | Description |
| --- | --- |
| `yarn start-dev-server` | Starts the local development server |
| `yarn run-ios` | Builds the app and runs on the iOS simulator |
| `yarn test` | Runs all tests |
| `yarn lint` | Runs eslint over entire project |
| `yarn fix` | Auto fixes any eslint for formatting errors (if they can be auto fixed) |
| `yarn new-component [Component Name]` | Generates a new component in `app/components/` from a template |
| `yarn new-screen [Screen Name]` | Generates a new screen in `app/screens` from a template |

The component and screen generators will create a diretory and setup the styles, ui, container and test files as well as add the component or screen to the appropriate index file so it can immediately be imported and used.

## Libraries
### Navigation
This scaffold uses [`react-navigation`](https://reactnavigation.org/) which is very solid navigation library from the developers at Expo. The most popular navigation library for `react-native` that I know of is [`react-native-router-flux`](https://github.com/aksonov/react-native-router-flux) and while it is very simple to use it has a lot of issues and you will likely spend a lot of time fighting with it.

### State Management
This is currently setup to use [`realm`](https://github.com/realm/realm-js). Realm is fast native mobile database with native bindings for `react-native`. It is also using [`realm-react-redux`](https://github.com/lolatravel/realm-react-redux) to give structure to how components react to changes in the database, inspired by [`redux`](https://github.com/reduxjs/redux). The structure may seem a little heavy at first, but for apps with a lot of data I'd recommend it to help keep things organized and maintainable. This could also rather easily be swapped out for plain `redux` with [`redux-persist`](https://github.com/rt2zz/redux-persist) to keep data on disk and persist across app restarts.

### Forms
It is not yet part of this project, but I recommend [`formik`](https://github.com/jaredpalmer/formik) for managing form logic/state. It handles changes, validation, formatting, errors, submission/loading states all very nicely. I will likely add an example to this project soon. If you want to avoid more dependencies, you can also manage form state in your containers using `setState()` rather easily. I would avoid managing form state in `redux` or `realm` as you can easily have performance issues and is overall quite heavy to maintain.

### Styling
[`react-with-styles`](https://github.com/airbnb/react-with-styles) is a styling library from AirBnB that works well with React Native. This is not one of the more popular libraries, however it is quite simple and provides a nice and performant API to work with. [`glamorous-native`](https://github.com/robinpowered/glamorous-native) is a really nice alternative with a simple API that is also worth looking at.
