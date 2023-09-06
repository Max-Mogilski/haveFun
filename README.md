### "HaveFun" online cassino application

My main goal was to create something fun and challenging.
Whole project took me 1 month of daily work.

Technologies used: **HTML, SCSS, REACT, FIREBASE V9, DATE-FNS, CONFETTI-REACT AND UUID**

Live: https://max-mogilski.github.io/haveFun/

### Run locally:

1. Open your terminal and then type

$ git clone {the url to the GitHub repo}

This clones the repo

2. cd into the new folder and type

$ npm install

This installs the required dependencies

3. To run the React project.
$ npm start

You are done! Now you can start editing the React project in the new folder that's created.

# Functionalities:

Main purpose of application is to provide fun games and excellent UX not for real money.

## Scratch card game:
Game was designed to be scalable. Making completely new scratch card with different items, odds, and amount of tiles is easy.

![alt text](https://i.ibb.co/wppym0B/Zrzut-ekranu-2022-10-2-o-02-39-15.png)

You have to have enough money on your account to buy a game.

You have to get three or four same winning symbols to win.
Win animations will be displayed only if you scratch all fields.
If you leave game before finishing you will get reward (if won) automaticaly without animation or any alert.

![alt text](https://i.ibb.co/k2pfYd2/ezgif-com-gif-maker.gif)

WIN = PRICE * MULTIPLIER

## Profile

Profile section was made with query parameter which provides ability to add content to application easily.
That open doors to many features. Now it's easy to implement, for example, function to share user statistics or show frends or other users profiles.

![alt text](https://i.ibb.co/GcD8SP8/Zrzut-ekranu-2022-10-2-o-03-17-06.png)

## Transactions

Ability to show and hide transactions is available only if you have more than three transactions.

![alt text](https://i.ibb.co/7XdT0hw/Zrzut-ekranu-2022-10-2-o-03-23-13.png)

## Settings

In this section user is able to change default avatar or delete current one as well as name, email and notification status.

#### If you are on testing account some functions might be unavailable.

![alt text](https://i.ibb.co/H4MSMYF/Zrzut-ekranu-2022-10-2-o-03-31-26.png)

## Notifications

Whole notification system was designed to contain one global notification state.
Display in one place, dispatch in many places.

![alt text](https://i.ibb.co/yXHVgYB/ezgif-com-gif-maker.gif)

![alt text](https://i.ibb.co/Yd9Sw5J/ezgif-com-gif-maker.gif)
