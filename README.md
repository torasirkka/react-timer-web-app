# FAQ:

- How long you spent on the assignment.
  Circa 3.5h
- What you like about your implementation.
  I am happy with the component hierarchy and separation of concerns that I have implemented: the lower-level components are 'dumber' while the top level container keep track of states and send down information to child components as needed. The top-level 'TimerContainer' keeps track of the timers and their states. The Timer List item component is purely visual rendering.
  
  To keep the timers time separate from rendering logic. Each timer is associated with a name, a time/duration provided by the user, as well as the unix timestamp registered upon the user clicking 'start new timer'. I re-render the components every 100 milli seconds. Upon each re-render I get the current unix time stamp, and calculate the time difference between the registered start timestamp and the current timestamp. Before I visualize the time left I convert it to seconds left on timer.

- What you would change if you were going to do it again.
  I implemented most of the changes I wanted, which is why I didn't get so far. I would probably move the logic of calculating the remaining time in the top component instead of it's child component. This would make separation of concerns even clearer as I would send only the information needed to the TimerList component.

- How you made your design decisions. For example, if you looked at other timer apps/webapps for inspiration, please note that.
  I started by thinking about the most simple and succint way to render a timer: the information to be showed to the user. I then started sketching out what data I need to store about each timer, and different ways to visualize it along with possible component hierarchies. Separation of concerns and readability were leading stars.
  
  I did look at timer apps, for example the timer app on my android phone. I did not find any that showed multiple timers in a good way, so I ended up doing my own thing: pursuing something simple.

  In the end I went for a familiar and simple solution: a list of timers where the timer name + time remaining in seconds is shown.

- How you would test this if you had more time.

  I would do unit-tests on the 'seconds left' function that calculates the seconds left.
  The important thing is that I can trust it, so I would test all the functions that are involved: I would want to compare the timer to an external one. Since my timer relies on the difference between two time unix timestamps, testing the function that calculates the difference gets us far. I would however, also test it manually. 

  Luckily there is already some input validation on the timer input, that makes sure that I can trust the data entered without additional testing.

If you did not use the starter code, please also include instructions on how to build and run your project so we can see and interact with the timer webapp you built.

### Installation:
You need npm for this project. 
```
cd react-timer-web-app
npm install
npm start
```