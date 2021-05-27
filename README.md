# Project-Planner

## Description
The project planner was meant for me to practice jQuery, Bootstrap, and Moment. It allows the user to write in events for their day and store them locally so that, on reload, it will keep the items inputted. It is style to change colors based on the hour: past is great, current is red, and future is green. I initally wrote the code to store items using raw JavaScript, and learned more efficient ways using jQuery. The 'this' selector was very helpful and allowed my html code to look more clean than it had been before. Using Moment was fairly simple once I changed the classes from a string of words to a string of number(s) so that I could parse them into integers and compare them to the current hour. 

## Usage
Click on the empty text area to type your event into the planner, and click the "Save Event" button to save to local storage. That's it! 

    ![Screenshot of website](/Assets/screenshot.PNG)
    ![gif of user inputting events and saving them to local storage, and on refresh the items are still there](/Assets/gif.gif)

