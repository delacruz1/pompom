import React, { useState, useEffect } from "react";
import "./Timer.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import sound from "../assets/bell.mp3";

function Timer({ name, mins, secs, startingMessage }) {
  //Initializes bell sound
  const alarmSound = new Audio(sound);

  // Initializes various states for elements of this component
  const [minutes, setMinutes] = useState(mins);
  const [seconds, setSeconds] = useState(secs);
  const [message, setMessage] = useState(startingMessage);
  const [startPressed, setStartPressed] = useState(false);
  const [reset, setReset] = useState(false);
  const [hideResetButton, setHideResetButton] = useState(true);
  const [hideStartButton, setHideStartButton] = useState(false);

  // Uses date library to get the current time and adds desired mins + seconds to set timer
  const targetTime = new Date().getTime() + minutes * 60000 + seconds * 1000;

  // Side effect hook that shows time counting down depending on startPressed variable
  useEffect(() => {
    if (startPressed) {
      setHideResetButton(true);
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetTime - now;
        var minutesLeft = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        var secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
        if (secondsLeft < 10) {
          setSeconds(`0${secondsLeft}`);
        }

        if (minutesLeft <= 0 && secondsLeft <= 0) {
          setMessage("Done!");
          alarmSound.play();
          clearInterval(interval);
          setHideResetButton(false);
          setHideStartButton(true);
        }
      }, 1000 - (Date.now() % 1000));
      return () => {
        setHideResetButton(false);
        clearInterval(interval);
      };
    }
  }, [startPressed]);

  //Side effect hook handling reset of the timer
  useEffect(() => {
      return () => {
        setMinutes(mins);
        setSeconds(secs);
        setMessage(startingMessage);
        setStartPressed(false);
        setHideStartButton(false);
        setHideResetButton(true);
        setReset(false);
    }
  }, [reset])

  return (
    <div className="timer__container">
      <Typography variant="h3">
        <strong>{minutes}:{seconds}</strong>
      </Typography>
      <Typography variant="h4">{message}</Typography>

      <div className="timer__buttons">
        {!hideStartButton && (
          <Button
            variant="contained"
            onClick={() => setStartPressed(!startPressed)}
            color={startPressed ? "secondary" : "primary"}
          >
            <strong>{startPressed ? "Pause" : "Start"}</strong>
          </Button>
        )}

        {!hideResetButton && (
          <Button variant="contained" color="error" onClick={() => setReset(!reset)}>
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}

export default Timer;
