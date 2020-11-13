window.onload = async () => {
    const url = ("https://striveschool-api.herokuapp.com/api/movies/")
    let productList = document.querySelector("#section1");
    let categoryName = document.querySelector("#categoryname1")
    let urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get("id");
    
    try {
      let response = await fetch(url + "off", {
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjOTRiY2RlMTAwMTc2MTZhODAiLCJpYXQiOjE2MDUxMDg4MDEsImV4cCI6MTYwNjMxODQwMX0.mtbbZ989-aU75_cKH3KnULhH7anOrPQdcdW1R7MQTSk",
          "Content-Type": "application/json",
        }),
      });


      let movies = await response.json();
      console.log(movies);
      if (movies.length > 0) {
        movies.forEach((e) => {
          let img = document.createElement("div");
          img.classList.add("mr-3");
          img.innerHTML = `
          
          <img
          src="${e.imageUrl}"
          class="d-block w-100 img-fluid rounded"
          alt="img"
          />`;
          categoryName.innerHTML = `<h4 id="categoryname1" style="color: white">${e.category}</h4>`;
          productList.appendChild(img);
        });
      } else {
      }
    }
    
    catch (error) {
      console.log(error);
    }  
  };

  //why god