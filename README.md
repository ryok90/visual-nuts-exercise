# Visual Nuts Exercise
Description of the exercises are [here](Exercises.md).

## Considerations
### Exercise 1
I took into consideration that the function could receive a parameter to define the upper limit.  
To enforce the consistency of the rules specified on the description, I made an unitary test that ensures only the rules mentioned (divisble by 3, 5, and both), that means, adding any other divisible rule that doesn't change the number affected by the other 3 rules, should not affect the test as well. It is set to run for a random number between 1 and 1000 as the upper limit. In an ideal workflow, this test should be validated every time a pull request is opened to the protected branches.

### Exercise 2
I created some `.json` files in the `./data` folder for testing purposes. For this exercise I assumed that no duplicated country abbreviation will be given and that the 'world' on the first task means the provided array and not the real world.  
Since there were no specifications about results with tied values, my solution takes into account the first country in the order that it is provided whenever a tie happens.

## Running the exercises
Requirements: `Node.js: +16.*`, `yarn: +1.*`  
Only `jest` and its type were added as dev dependencies.  
I made a few script to easily run the exercises:
```bash
yarn install # Install dependencies
yarn all # Run both exercises at once
yarn ex1 # Run exclusively Exercise 1
yarn ex2 # Run exclusively Exercise 2
yarn test # Execute both test suites
```
