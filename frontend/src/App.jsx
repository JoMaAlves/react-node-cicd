import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";

const port = "http://localhost:5000";

function App() {
  const [username, setUsername] = useState("");

  const getNames = async () => {
    const response = await axios.get(`${port}/names`);
    setUsername(response.data);
  };

  return (
    <div className="App">
      <h1 className="mb-5">My Little CI/CD Site</h1>

      <div class="mb-5">
        <Input username={username} setUsername={setUsername} />
      </div>

      <h3>
        Hello! My name is{" "}
        <span className="User">{username ? username + "!" : "..."}</span>
      </h3>

      <p>Modificacao feita durante a aula</p>
    </div>
  );
}

export default App;
