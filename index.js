

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
            //document.body.style.backgroundImage = `url("this is where the defuault url should go")`
            const img = document.querySelector("img");
            img.src = "https://www.wordforest.org/2016/12/16/glossary-forestry-terms/"

            
            
      }); 







 
