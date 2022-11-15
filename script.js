//alert("Connected!");

/*const testurl = "https://quote-garden.herokuapp.com/api/v3/quotes?page=3";

fetch(testurl)
.then(response => response.json())
.then(data => console.log(data));
*/


document.getElementById("get-quote").addEventListener("click", displayQuote);



function displayQuote(){
    //console.log("Button clicked");
    const results = document.getElementById("quote-results");

    const randomNumber = Math.floor(Math.random() * 7000);
    //const randomQuoteNumber = Math.floor(Math.random() * 11);
    //console.log(randomNumber);

    const endpoint = `https://quote-garden.herokuapp.com/api/v3/quotes?page=${randomNumber}`;
    console.log(endpoint);

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data.data[0].quoteText);
        console.log(data.data[0].quoteAuthor);

        results.innerHTML = `<h3>${data.data[0].quoteText}</h3>`;
        results.innerHTML += `<h4>-${data.data[0].quoteAuthor}</h4>`;
    });
}

function displayBackground(){
    const display = document.getElementById("quote-results");
    display.classList.toggle("displayBackground");
}

function changeBackground(){
    const background = document.getElementById("container");
    background.classList.toggle("backgroundBlue");
}

function changeBackgroundRed(){
    const background = document.getElementById("container");
    background.classList.toggle("backgroundRed");
}

function changeBackgroundGreen(){
    const background = document.getElementById("container");
    background.classList.toggle("backgroundGreen");
}

function removeBackground(){
    const cls = ["backgroundBlue", "backgroundRed", "backgroundGreen"];
    const background = document.getElementById("container");
    background.classList.remove(...cls);
}