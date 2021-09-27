# NodeReactTaskManager

## to spin up 

- cd into `/client` and run `yarn start` 
- cd into `/server` and run `yarn start` 
- visit `localhost:300` on browser

## to test
- cd into `/server` and run `yarn run test` 

## questions
- How long did you spend on your solution?
  - 2.5 hours
- How do you build and run your solution?
  - see above 
- What technical and functional assumptions did you make when implementing your
  solution?
  - assumption 1: user data should persist on browser until removed by user or server restarted
  - assumption 2: user does not require data to be stored forever
  - assumption 3: database testing is not required
  - assumption 4: client and server are to remain seperate for implementation on multiple clients
Briefly explain your technical design and why do you think is the best approach to this
problem.
  - API and server implemented with nodeJs and Express
    - Cors package used for cross-site scripting
    - Jest, Supertest (integration api calls) and `node-mocks-http`(unit tests for controller)  used for testi
    - Server uses errorHandling middleware after each reequest to ensure errors don't crash server
    - Server uses middleware before certain requests to validate data

  - Client uses pure React with no additional libraries, to avoid bloat for relatively simple app
  - Webpack & babel used for bundling and transoiling
 
• If you were unable to complete any user stories, outline why and how would you have
liked to implement them.
  - N/A
