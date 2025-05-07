const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

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
      jokeEl.innerText = data.joke;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("API Called");
}

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
