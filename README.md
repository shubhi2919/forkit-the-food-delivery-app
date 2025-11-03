# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- my notes
the difference between onClick={handleAdd(item)}, onClick={handleAdd}, and onClick={()=>handleAdd(item)} in React (or similar frameworks) is very important for understanding how event handlers work. Here’s what each one does:

1. onClick={handleAdd(item)}
What happens:
handleAdd(item) is called immediately when the component renders, not when the button is clicked.
Why:
Because you are calling the function right away and passing its result (likely undefined) as the event handler.
Use case:
Rarely what you want for event handling.
Example:

jsx
<button onClick={handleAdd(item)}>Add</button>
Here, handleAdd(item) runs during render, not on click.

2. onClick={handleAdd}
What happens:
The handleAdd function itself is passed as the event handler. When the button is clicked, the event object is automatically passed as the first argument.
Why:
Use this pattern when your handler doesn't need any arguments except the event.
Use case:
Good for simple handlers, e.g. onClick={handleSubmit}.
Example:

jsx
<button onClick={handleAdd}>Add</button>
Here, handleAdd(event) will be called on click, with the event as the argument.

3. onClick={() => handleAdd(item)}
What happens:
An anonymous function is created that, when the button is clicked, calls handleAdd(item).
Why:
This lets you pass custom arguments (item), not just the event.
Use case:
Use this pattern when you want to pass extra data to your handler.
Example:

jsx
<button onClick={() => handleAdd(item)}>Add</button>
Here, handleAdd(item) runs only when clicked.
 -->