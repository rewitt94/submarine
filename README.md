Note-to-self: Make it so that you cannot enter long highscores...

# Submarine

![submarine screenshot](https://raw.githubusercontent.com/rewitt94/submarine/master/screenshots/submarine-screenshot.png)

### What is this project?

This was my first programming achievement.
This game was built before I discovered TDD.
In fact, I built this before I was aware of basic object oriented principles.
The code is horrible, but functional.
It becomes laggy if you progress too far; the object spawn rates increase the further you go.

> Firing a torpedo passed a distance of about 20,000px converts the game from a shooter to a powerpoint presentation (not really).

Have a look at the code if you're feeling brave.

### What is this project build with?

This game is built with vanilla Javascript, HTML and CSS.
I used express to host it on my local machine.
I later added a sqlite database and a very basic api to my server to store highscores. All of this is now intergrated into my website.

### How did I program this game?

The design is simple enough.
An update() function is called by a SetInterval() which updates the game dependent on various booleans.
Who doesn't love global variables?
These booleans are controlled by some event listeners (e.g. the arrow keys).
For example if (vector.left == true) the sub will move left.
The booleans for collisions of images (on transparent backgrounds) include lots of "seemingly magic" numbers.
Hey, it works.

### Can I try the game?

This is a game hosted on my website so why not have a play!
Also there is a VERY simple bug (that could easily be resolved) which will enable you to cheat a good highscore.
Can you work it out?

***

Here you can play the game: http://ricky.hewitt.tech/submarine

Here you can see image copyright: http://ricky.hewitt.tech/copyright
