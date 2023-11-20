import "./styles.css";
import Greet from "./Components/Greet";
import { useState } from "react";

export default function App() {
  const clock = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(clock);
  const updateTime = () => {
    let clock = new Date().toLocaleTimeString();
    setCurrentTime(clock);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="App">
      <Greet name="Ashwin" messageNumber={20} isLoggedIn={true} />
      <div className="clock">
        <h1>{currentTime}</h1>
      </div>
    </div>
  );
}
