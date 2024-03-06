import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      axios
        .get("https://catfact.ninja/fact")
        .then((response) => {
          setFact(response.data.fact);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className='App'>
      <button onClick={() => fetchFact()}>
        Generate Cat Fact
      </button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
