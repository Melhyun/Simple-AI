function displayAnswer(response) {
  new Typewriter(".answer", {
    strings: response.data.answer,
    cursor: null,
    delay: 10,
    autoStart: true,
  });
}

function api(event) {
  event.preventDefault();

  let apiKey = "59c94t1918f34a2b8290c703o6bece67";
  let context =
    "You are a knowlagable and logical AI , you have to answer the questions logically,straight to the point and short";
  let answer = document.querySelector(".box");
  let prompt = answer.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);
}
let button = document.querySelector(".form");
button.addEventListener("submit", api);
