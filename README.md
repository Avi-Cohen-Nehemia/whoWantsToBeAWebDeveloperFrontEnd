# Who Wants to be a Web Developer App

This app was created by [Avi Cohen-Nehemia](https://github.com/Avi-Cohen-Nehemia) and [Maddy McMahon](https://github.com/mdm106), using pair programming.

This is the repository for the front-end of the app. The app can be viewed [here](https://avi-cohen-nehemia.github.io/whoWantsToBeAWebDeveloperFrontEnd/#/).

The app utilises an API on the back-end, and the repository for this can be found [here](https://github.com/Avi-Cohen-Nehemia/whoWantsToBeAWebDeveloperBackEnd).

## Tech Stack / Frameworks
- React
- Redux
- HTML
- CSS
- Javascript
- JSX
For the API (https://github.com/Avi-Cohen-Nehemia/whoWantsToBeAWebDeveloperBackEnd) the following were used:
- PHP 
- Laravel

## Features

MVP:
- App that displays multiple choice questions to the user regarding aspects of web development. The questions are retrieved from the API backend of the app. The user selects an answer and if they are right they are shown further questions of increasing difficulty, until they have answered 15 questions correctly and have thus won the game. If the user gets a question wrong they are alerted to this and shown a button to reset the game.

Additional features implemented in app:
- On screen prompts from 'host' to guide player through the game. The name the player enters on landing page is used to personalise the prompts.

- Themed music plays according to the stage of the game that the player is at. Mute button available to control whether sound plays. Sound is muted on launch of app to comply with brower autoplay policies.

- When a player gets a question wrong, the resulting alert tells the player what the right answer was.

- Fireworks CSS effect (source: https://jsfiddle.net/elin/7m3bL/) appears on alert to congratulate player on winning the game.

- Upon getting a question wrong, or completion of the game, the current difficulty of the question is posted to the API. After the POST request, a GET request to the API is then made to return the % of all games in which players have finished at a lower level than the current game. This return is used to display a statistic to players to compare their performance to other players. The statistic is omitted for players that get the first question wrong.

- Responsive styling for all screen sizes.

## Version Management

Git and GitHub used throughout project. The Feature Branch Workflow was used, by working on feature branches that were merged back into master using pull requests.

## How to install the project:

1. cd into the directory on your local machine where you would like the project to be saved
```bash
cd {directory}
```
2. Clone the repository to your local machine as follows
```bash
git clone {git@github.com:Avi-Cohen-Nehemia/whoWantsToBeAWebDeveloperFrontEnd.git} {foldername}
```
3. Run npm install to install all the required packages
```bash
npm install
```
4. Run npm start to run the app locally in development mode
```bash
npm start
```





