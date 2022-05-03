import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Timer from "./sections/Timer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  document.title = "Pompom | Pomodoro Timer";
  const [value, setValue] = useState("1");
  const [pomodoroMinutes, setPomodoroMinutes] = useState("25");
  const [shortBreakMinutes, setShortBreakMinutes] = useState("5");
  const [longBreakMinutes, setLongBreakMinutes] = useState("10");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div className="app__cardContainer">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} aria-label="timer tabs">
            <Tab label="Pomodoro" value="1" />
            <Tab label="Short Break" value="2" />
            <Tab label="Long Break" value="3" />
            <Tab label="Settings" value="4" />
          </Tabs>
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
            <TabPanel value="1">
              <Timer
                name="Pomodoro"
                mins={pomodoroMinutes}
                secs="00"
                startingMessage="Let's do this!"
              />
            </TabPanel>
            <TabPanel value="2">
              <Timer
                name="Short Break"
                mins={shortBreakMinutes}
                secs="00"
                startingMessage="Take a short break!"
              />
            </TabPanel>
            <TabPanel value="3">
              <Timer
                name="Long Break"
                mins={longBreakMinutes}
                secs="00"
                startingMessage="Take a long break!"
              />
            </TabPanel>
            <TabPanel value="4">
              <FormControl fullWidth variant="standard">
                <InputLabel id="pomodoroMinutesLabel">
                  Pomodoro Duration
                </InputLabel>
                <Select
                  labelId="pomodoroMinutesLabel"
                  id="pomodoroLabel"
                  defaultValue={pomodoroMinutes}
                  onChange={(e) => setPomodoroMinutes(e.target.value)}
                  label="pomodoro minutes"
                >
                  <MenuItem value={25}>25 Minutes</MenuItem>
                  <MenuItem value={45}>45 Minutes</MenuItem>
                  <MenuItem value={60}>1 Hour</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="standard">
                <InputLabel id="shortBreakMinutesLabel">
                  Short Break Duration
                </InputLabel>
                <Select
                  labelId="shortBreakMinutesLabel"
                  id="shortBreakLabel"
                  defaultValue={shortBreakMinutes}
                  onChange={(e) => setShortBreakMinutes(e.target.value)}
                  label="short break minutes"
                >
                  <MenuItem value={5}>5 Minutes</MenuItem>
                  <MenuItem value={10}>10 Minutes</MenuItem>
                  <MenuItem value={15}>15 Minutes</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="standard">
                <InputLabel id="longBreakMinutesLabel">
                  Long Break Duration
                </InputLabel>
                <Select
                  labelId="longBreakMinutesLabel"
                  id="longBreakLabel"
                  defaultValue={longBreakMinutes}
                  onChange={(e) => setLongBreakMinutes(e.target.value)}
                  label="long break minutes"
                >
                  <MenuItem value={10}>10 Minutes</MenuItem>
                  <MenuItem value={15}>15 Minutes</MenuItem>
                  <MenuItem value={20}>20 Minutes</MenuItem>
                </Select>
              </FormControl>
            </TabPanel>
          </Card>
        </TabContext>
        <div>
          <center>
            <Typography variant="subtitle1" color="white">
              User features coming soon!
            </Typography>
            <Typography variant="subtitle1" color="white">
              Made by{" "}
              <Link href="https://joshdelacruz.com">Josh Dela Cruz</Link>
            </Typography>
          </center>
        </div>
      </div>
    </div>
  );
}

export default App;
