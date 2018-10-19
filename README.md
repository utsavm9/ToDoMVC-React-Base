# Base ToDoMVC project
Skeleton code when starting the ToDoMVC tutorial.

Your job is to break down the code inside App.js into individual components and get all the features described in the [spec](https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality) to work.

## If you're working on your React skills, ignore the folders labeled containers, actions, and reducers
Containers, actions, and reducers are related to Redux, an npm package used to handle state.

## How to start the project
1. git clone https://github.com/connorbo97/ToDoMVC-React-Base.git
2. cd ToDoMVC-React-Base
3. npm install
4. npm run start
5. Wait for script to finish building project
6. Go to localhost:3000 in a browser of your choice

## Folder structure
/src
&nbsp;&nbsp;/app
&nbsp;&nbsp;&nbsp;&nbsp;index.js
&nbsp;&nbsp;&nbsp;&nbsp;/components
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;each js file inside /components should be a large component with its own state
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or simply an important part of App.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blah.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Blah     this folder contains all components that help Blah do its job
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Header.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BlahButton.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;etc
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Below is an example of how you could structure the todo list of the app
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ToDoList.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ToDoList
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ToDo.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ToDo
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkbox.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title.js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DeleteButton.js

You can structure it however you like, but this is how I would recommend doing so.

      


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).