
# Speaking Line Demo:

Hello, 
For this demo project I have made some effort to give a general view about my skills and compentencies in building single we apps using ReactJS, So, I would like to mention that I didn't get enough time to make the app 100% responsive and looks good on all screen sizes, and also I didn't get enough time to implement some sort of complex animation using React Spring and I have just make a simple and awesome animation just to showcase my skills in using react springs and making animations in ReactJS.
And yeah this is a breaf introduction about what I have built so far:

## Technologies Used:

* ReactJS: For Building The General UI
* Redux: For Managing The State Of The App
* React Srping: For Handling Animation
* Bootstrap: For Designing The UI (Along With Regular CSS)
* Font Awesome: For Icons And Vectors

## UI Structor:

The Eğitmenler are composed into 5 React Components each Component represents a specific section inside the web page like so:
* The NavBar Component represents the navigation bar inside the app 
* The SearchBar Component represents the second section in the very top of the web page, which contain a search input
* The StatusBar Component represents the section which take care of displaying the instructors based on the status clicked
* The Instructors Component represents the section in which the instructors are showed based on the current clicked status, and each instructor card is represented with a Instructor Component which takes care of displaying the information of the instructor
* And finally the Footer Component Which is a simple designed Footer shows in the very bottom of the web page

## Redux State:

Currently the redux state only have one single reducer which is the instructorReducer which takes care of manipulating the instructors data and also provide the app with the needed information

## Controling the Animation:

inside the Eğitmenler Component there is a React Hook which is [startAnimation, setStartAnimation] and also a function called loadAnimation, this function takes care of starting the animation whenever the state changed, and it's important to mention that there is another good approach of doing it (using the Redux subscribe) but I feel that this approach is more efficient for our simple usecase

## Conclusion:

This is the final result of my work for this demo project I hope that it won your admiration :), and thank you so much for giving me this opportunity