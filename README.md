# NorthCodersNews

This project is essentially a simplistic replica of redit, showcasing my coding skills with a functionally rich project. The project lists various articles on the home page.You can navigate to specific topics and then all the articles associated with the topic will be listed. You can up and down vote on comments and articles. In addition you can post a new comment to the article page.

## Getting Started

To obtain a copy of this project you will need to follow the instructions below:

-On the command line change into the directory you wish to clone the project

-Copy the HTTPS clone url 

-carry out the following commands:

    
    git clone https://github.com/Richard-Thompson/north_coders_news.git

    cd north_coders_news
    

## Prerequisites

### Node:

Install Node according to the instructions on https://nodejs.org/en/

run node -v to check if node is or has been installed

### NPM:

Ensure that npm is fully updated, carry out the following command in your terminal:

    npm install npm@latest -g

run npm -v to see if node has been installed and what version you are running

## Installing

Once you have all the required software installed, go to the directory of the cloned project and run the following commmand:

    npm install 

This will install all the dependencies of the project.

To start the project on a localhost server run the following command

    npm run dev

You will now be able to see the project by navigating to:

    localhost:9080

Alternatively you can go to the deployed website:

    https://secret-harbor-32173.herokuapp.com/

## Running the tests

To run all the automated tests for this project, all you have to do is the following command in the root directory:

```
npm test
```
## Coding style tests

In this project I have installed eslint to highlight any syntax errors. 

This will run a posttest script.

Once running errors will show in the console.

## Built With

* [Node](https://nodejs.org/en/docs/) - Javascript runtime 
* [NPM](https://docs.npmjs.com/) - Dependency Management
* [Webpack](http://webpack.github.io/docs/) - Module bundler
* [React](https://facebook.github.io/react/) - Javascript library for user-interfaces
* [Redux](http://redux.js.org/) - A predictable state container for JavaScript apps
* And others.

## Authors

* **Richard Thompson** - *Initial work* - [Richard Thompson](https://github.com/Richard-Thompson)

## Acknowledgments

* A great thanks to NorthCoders who mentored me and assisted in my learning of javascript and its libraries/frameworks