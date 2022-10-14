import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Button } from "@mui/material";

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [joke, setJoke] = useState(null);
  const endpoint = "https://api.chucknorris.io/jokes/random";

  const handleLike = () => {
    handleJoke();
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    handleJoke();
    setDislikes(dislikes + 1);
  };

  const handleJoke = () => {
    axios(endpoint)
      .then((res) => {
        setJoke(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("Proccess successful"));
  };

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>

      <div className="joke-container">
        {joke === null ? (
          <Button variant="contained" onClick={handleJoke}>
            New joke
          </Button>
        ) : (
          <>
            <p>{joke.value}</p>
          </>
        )}
      </div>

      <div className="buttons-container">
        <div>
          <p>Likes: {likes}</p>
          <Button variant="contained" color="success" onClick={handleLike}>
            Like
          </Button>
        </div>

        <div>
          <p>Dislikes: {dislikes}</p>
          <Button variant="contained" color="error" onClick={handleDislike}>
            Dislike
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
