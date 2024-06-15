import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jocks, setJocks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jocks")
      .then((response) => {
        setJocks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>learn full stack</h1>

      {jocks.map((jock) => (
        <div key={jock.id}>
          <h3>{jock.title}</h3>
          <p>{jock.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
