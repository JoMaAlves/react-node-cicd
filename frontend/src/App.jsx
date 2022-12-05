import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const port = "http://localhost:5000";

function App() {
  const [username, setUsername] = useState("");

  const getNames = async () => {
    const response = await axios.get(`${port}/names`);
    setUsername(response.data);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <div className="App">
      <h1>My FrontEnd</h1>
      <h3>My name is Jomassauro!</h3>
    </div>
  );
}

export default App;
