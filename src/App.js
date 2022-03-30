import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Timer from "./sections/Timer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";

function App() {
  document.title ="Pompom | Pomodoro Timer"
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Header />
      <div className="app__cardContainer">
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} aria-label="timer tabs">
            <Tab label="Pomodoro" value="1" />
            <Tab label="Short Break" value="2" />
            <Tab label="Long Break" value="3" />
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
              <Timer name="Pomodoro" mins="25" secs="00" startingMessage="Let's do this!" />
            </TabPanel>
            <TabPanel value="2">
              <Timer name="Short Break" mins="5" secs="00" startingMessage="Take a short break!"/>
            </TabPanel>
            <TabPanel value="3">
              <Timer name="Long Break" mins="10" secs="00" startingMessage="Take a long break!"/>
            </TabPanel>
          </Card>
        </TabContext>
      </div>
    </div>
  );
}

export default App;
