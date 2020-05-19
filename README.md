# GMDB front end

## Objectives
    - Write user stories based off of feature requests and designs
    - Test Drive a connected CRUD React app using the relevant testing libraries (UI tests: Cypress, Unit tests/mocks: Jest)

## Background
You are creating your very own movie database (definitely not IMDB). You have been given some designs and feature requests of what a Minimum Viable Product should look like, and it's your responsibility to create your own user stories and work flow.

### Features:
- Browse movies anonomously
- Look at a specific movie with details and reviews
- Search movies
- Post a review on a movie
- Register a new user

### Designs:
- Browsing Movies
![View for browsing movies](images/Browse-Movies.png)

- Movie Details and Reviews
![movie details with corresponding review section](images/Movie-Detail-and-Post-Review.png) 

- Searching for movies
![filtered movie list view based on search criteria](images/Search.png)

- Login
![view of a login screen](images/Login.png)

## Acceptance Criteria
- All code is produced through TDD with a pair
- UI tests are performed using Cypress
- All functionality of the application is developed using component based architecture in React
- All persistent data is received and processed through network requests to the back end service
- The application is structured to consume data according to the structure provided by the back end service

## Instructions
### Front End Setup:
- run `npx create-react-app gmdb-frontend` to generate a new project
- In your command line, navigate to the generated project
- to install Cypress, run `npm install cypress --save-dev`
- install and setup Enzyme. [following these directions](https://create-react-app.dev/docs/running-tests)
- to test your app, run `npm run test`
- to run your app, run `npm run start`
- - The server will be available at `http://localhost:3000` 

### Back End Service Setup:
- fork and clone this repo using git
- to install the back end service and dependencies, run `npm install` in the root of the project directory
- To start the server, run `npm run start`
- The server will be available at `http://localhost:3001` 

#### Available Service Endpoints
- `GET movies` - returns a list of all movies
- `GET movies/:id` - returns details of a specific movie
- `GET movies?search=<query>` - returns a list of movies filtered on titles matching the given query
- `GET reviews/:movieId` - returns all reviews for a given movie
- `POST reviews` - creates a new review, returns success status in JSON response 
- `POST register` - creates a new user, returns success status in JSON response