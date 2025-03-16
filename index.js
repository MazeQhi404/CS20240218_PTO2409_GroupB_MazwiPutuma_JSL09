

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
      .then(res => res.json()) // changes from json to javascript 
      .then(data => { 
            document.body.style.backgroundImage = `url(${data.urls.regular})`
            document.getElementById('author').textContent = ` By: ${data.user.name$}` // displays the authors name

      })
      .catch(err => {
            
            console.log("Error");
            document.body.style.backgroundImage = "url('image.jpg')"
            
      }); 







 
