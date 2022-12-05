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

  return (
    <div className="App">
      <h1>My Little CI/CD Site</h1>

      <input
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <h3>
        My name is <span className="User">{username}</span>!
      </h3>
    </div>
  );
}

export default App;
