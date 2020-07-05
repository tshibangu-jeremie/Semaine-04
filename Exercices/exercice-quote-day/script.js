/* C'est ici qu'il faut rédiger ton code pour utiliser l'API */
let randomNumber = Math.floor(Math.random() * Math.floor(100));
fetch("https://type.fit/api/quotes")
  .then(response => {
    console.log(response)
    return response.json();
  })
  .then(response => {
    let data = response[randomNumber]
    document.getElementById("text").textContent = data.text;
    console.log(data.text);
  });