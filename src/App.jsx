import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TimezoneSelector from "./Components/TimezoneSelector.jsx";

function App() {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );
  const [timezone, setTimezone] = useState("UTC-0");

  return (
    <>
      <Header currentDate={currentDate} />
      <TimezoneSelector timezone={timezone} onChange={setTimezone}/>
    </>
  );
}

export default App;
