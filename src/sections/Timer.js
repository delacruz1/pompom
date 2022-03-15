import React, { useState } from "react";
import "./Timer.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";



function Timer() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const startTimer = (time) => {
    if (time === 0) {
      // play sound or change screen color or somethign
    }
    else {
      //count down
    }
  };
  const stopTimer = () => {};

  return (
    <div className="timer__container">
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} aria-label="timer tabs">
          <Tab label="Pomodoro" value="1" />
          <Tab label="Short Break" value="2" />
          <Tab label="Long Break" value="3" />
        </Tabs>
        <TabPanel value="1">
          <Card
            elevation={4}
            sx={{
              height: "300px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography variant="h4">25:00 minutes</Typography>
            <div className="timer__buttons">
              <Button variant="contained" onClick={startTimer(25)}>
                Start
              </Button>
              <Button variant="contained" onClick={stopTimer}>
                Stop
              </Button>
            </div>
          </Card>
        </TabPanel>
        <TabPanel value="2">
          <Card
            elevation={4}
            sx={{
              height: "300px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography variant="h4">5:00 minutes</Typography>
            <div className="timer__buttons">
              <Button variant="contained" onClick={startTimer(5)}>
                Start
              </Button>
              <Button variant="contained" onClick={stopTimer}>
                Stop
              </Button>
            </div>
          </Card>
        </TabPanel>
        <TabPanel value="3">
          <Card
            elevation={4}
            sx={{
              height: "300px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography variant="h4">10:00 minutes</Typography>
            <div className="timer__buttons">
              <Button variant="contained" onClick={startTimer(10)}>
                Start
              </Button>
              <Button variant="contained" onClick={stopTimer()}>
                Stop
              </Button>
            </div>
          </Card>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Timer;
