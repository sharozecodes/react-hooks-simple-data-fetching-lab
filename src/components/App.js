import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
    console.log(dogImage);
  }, []);

  return (
    <div>
      {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
