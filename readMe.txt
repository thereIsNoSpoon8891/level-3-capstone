// Approach 1. call useEffet ONCE and save the data 
    //--OR-- 
    // Approach 2. A callback function that runs useEffect
    // everytime the "get new meme image" button is clicked
    //Approach 1
// set state as array of memes.
// button to load random meme from the saved array and display it.
// * requires 1. state to store data, and display it, 2. state to save the memes
// OR Approach 2
// set useEffect inside of a callback function, and pull a random index each click
// THEN
// create a way to save the inputs and and images, second state will be needed


# Assignment   (8 Story Points Total)

Your group will make an app that satisfies the following user stories. 
It will be similar to what was completed in Scrimba, but will be done in VS Code and in a group using git:

- A user will see a meme image on page load
- A user can click "refresh meme image" to load a new one

## ( 2 Story Points:  Report as Progress Point 280.75)

- A user will see a form with two inputs and a submit button
- Inputs will be:
    - top text
    - bottom text
- A user will be able to see a preview of their meme

## ( 2 Story Points:  Report as Progress Point 282.75)

- A user will be able to add created memes to a list
- A user will be able to delete memes from the list

## ( 2 Story Points:  Report as Progress Point 284.75)

- A user will be able to edit an existing meme

## ( 2 Story Points:  Report as Progress Point 286.75)

Warning: The project will be maintained on github. 
It is suggested you read and watch everything in Resources before starting the project.

**********************************Additional Tips:********************************** 

1. Do not set the ID from the meme image as the ID for each created meme. 
This will cause issues if 2 or more memes use the same image.
 You can either use the index number from the meme list as the ID or
  use a [UUID generator package](https://www.npmjs.com/package/uuid)

Preform an HTTP request to "https://api.imgflip.com/get_memes" to get a list of memes.

### **Working In a group**

- Each team member will contribute code to the git repo
- While you won't have to commit `state` related code to the git repo yourself, 
you will need to work on `state` related code, maybe with a teammate or two, 
so that you can talk about what you did in your assessment. 
If you are working on code related to `state`, make sure you involve teammates who might 
not otherwise get the chance because they are working on different files. Paired or 
group programming is prevalent in the industry.
- Use the Level Channel to check in with someone in a later Level, a TA, or an
 instructor when you're beginning to help with setting up your Github collaboratively, if needed
- Group members will use this opportunity to practice Agile/SCRUM