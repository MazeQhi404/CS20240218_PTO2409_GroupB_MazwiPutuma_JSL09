
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
      

     })

     .catch(err => console.log(err))
       





 
