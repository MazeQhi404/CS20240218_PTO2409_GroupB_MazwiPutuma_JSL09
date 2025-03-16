
//Getting the background image generator from unslash:

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
      .then(res => res.json()) // changes from json to javascript 
      .then(data => { 
            console.log(data.urls.regular)
            document.body.style.backgroundImage = `url(${data.urls.regular})`
            document.getElementById('author').textContent = ` By: ${data.user.name$}` // displays the authors name

      })

      //.then blocks are written assuming that every promise will be resoled correctly 
      .catch(err => { //.catch runs everytime an error gets thrown
            
            console.log("Error");
            //document.body.style.backgroundImage = `url("this is where the default url for the background image should go")`
            document.getElementById('author').textContent = ` By: ${data.user.name$}`
            const img = document.querySelector("img");
            img.src = "https://www.wordforest.org/2016/12/16/glossary-forestry-terms/"


      }); 
// Getting the Dogecoin data:

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
     .then(res => {
          if(!res.ok) {
            throw Error("An error has occured") 
          } //checks to see if there is an error in accessing the data by returning an error message if there is

           return res.json()

     }) 

     .then(data => {

           document.getElementById("crypto-top").innerHTML = `

                   <img src=${data.image.small} /> 
                   <span>${data.name}</span>
           `
           // adding the image icon and name 

           document.getElementById("crypto").innerHTML += `
                    <p>🎯: $${data.market_data.current_price.usd}</p>
                    <p>📈: $${data.market_data.high_24h.usd} </p>
                    <p>📉: $${data.market_data.low_24h.usd}</p>
           `

     })

     .catch(err => console.log(err))
       
function getCurrentTime() {
const date = new Date()
document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"}) // takes date and formats it to a time string

}

setInterval(getCurrentTime(),1000) //takes a function as its firts parameter and how often you want to run that function as its second parameter

//Weather API

navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
});
 
