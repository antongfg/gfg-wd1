import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [joke, setJoke] = useState("");

  function generateJoke() {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("API Called");
  }

  useEffect(() => {
    generateJoke();

    return () => {
      setJoke("");
    };
  }, []);

  return (
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">
        {joke}
      </div>
      <button id="jokeBtn" class="btn" onClick={generateJoke}>
        Get Another Joke
      </button>
    </div>
  );
};

export default App;
