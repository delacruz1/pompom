# About
Pompom is a pomodoro timer made using React, Material UI and Firebase. 

# Feature(s) to be added
User features:
  - Seeing how many sessions completed
  - Task cards: Pretty much like a to-do list
 
UX features:
  - Changing session durations
  - Toggle Night Mode on/off
  - Logging in w/ Google


# Lessons Learned
- I've used Firebase a few times but I never really appreciated it until this project. So far I've used their authentication and hosting services and plan on using their database as I scale this project up. Implementing the login w/ email feature was straight forward and so I guess it should be the same as I implement logging in with Google.

- The timer logic was challenging because the timer would skip seconds. I didn't know that setInterval functions could fall out of time. As a result, I had to learn about how to self-adjust the interval of time given in the setInterval function in order to keep the time somewhat accurate.


