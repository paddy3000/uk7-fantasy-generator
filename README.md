# uk7-fantasy-generator
## Rupaul's Drag Race UK Season 7 Fantasy Results Generator

[Live Demo](https://paddy3000.github.io/uk7-fantasy-generator/)

The intention of this project was to create a JavaScript and HTML app where results of Rupaul's Drag Race UK Season 7 could be edited by the user by going through the competition episodes and reassigning challenge placements based on the user's preference. A lot of well-loved contestants were eliminated around the mid-point of the competition and many have commented that there are people they would have liked to see go further, this app gives you a chance to see how that might play out.

I have created a similar generator for All Stars 2 which you can find [here](https://paddy3000.github.io/as2-generator/)
And another (more primitive) one for Season 12, which I created in 2020 using different software, you can find that [here](https://paddybacall.shinyapps.io/French_Vanilla_Generator/)

## How to Use

To play with the app and edit queen progress, open the [live demo](https://paddy3000.github.io/uk7-fantasy-generator/)

- Click through episodes and adjust placements using the dropdown menus
- Press "See Results" to generate results table and graph which are updated as you make changes
- Use the Settings button to adjust the number of points awarded per placement
- If you have any feedback please fill out the feedback form by pressing the button with the speech bubble, I would love to hear it!

## Features

- Edit and reassign challenge placements for each episode to influence overall contestant progress
- Returning queen option included to change who returns to the competition and when
- Colour coded results table generated
- Automatically calculates PPE (Points Per Episode) scores with points per placement that can be updated by the user (e.g. challenge win = 5 points)
- Graphical display of results using Chart.js
- Reset button included to set back to original placements
- User cache used to store placement updates between visits to the site
- Google Forms used to add feedback functionality
- Display optimised for both desktop and mobile access
- Cute colour scheme and styling throughout :)

## Built With

- HTML5
- CSS3
- JavaScript (ES6)
- Chart.js

## Acknowledgments

- Inspired by discussions in the Drag Race fan community
- Styling elements for the results table and queen images taken from the [Rupaul's Drag Race Wiki](https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_UK_(Season_7))

## Editor's Note

This is a continuation of a project that I did during the COVID lockdown of 2020 while Season 12 of Rupaul's Drag Race was airing in order to see how the season could have played out without a certain disqualified queen's involvement in that season. The previous version was created in R shiny which is not a very flexible language so I was never fully satisfied with the display or functionality of that version and I have wondered about creating a new version for a long time. If you would like to have a look at the Season 12 version you can do so [here](https://paddybacall.shinyapps.io/French_Vanilla_Generator/)

